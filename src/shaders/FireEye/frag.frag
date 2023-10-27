varying vec2 vUv;
uniform float uTime;
uniform float uFireDirection;
uniform float uAmount;
uniform float uResolution;
uniform float uFrequency1;
uniform float uFrequency2;
uniform float uRed;

// 眼睛内圈形状sdf，https://www.shadertoy.com/view/4sS3zz
float sdEllipse( in vec2 p, in vec2 ab, float intensity )
{
  p = abs(p); if( p.x > p.y ) {p=p.yx;ab=ab.yx;}
  float l = ab.y*ab.y - ab.x*ab.x;
  float m = ab.x*p.x/l;      float m2 = m*m; 
  float n = ab.y*p.y/l;      float n2 = n*n; 
  float c = (m2+n2-1.0)/3.0; float c3 = c*c*c;
  float q = c3 + m2*n2*2.0;
  float d = c3 + m2*n2;
  float g = m + m*n2;
  float co;
  if( d<0.0 )
  {
    float h = acos(q/c3)/3.0;
    float s = cos(h);
    float t = sin(h)*sqrt(3.0);
    float rx = sqrt( -c*(s + t + 2.0) + m2 );
    float ry = sqrt( -c*(s - t + 2.0) + m2 );
    co = (ry+sign(l)*rx+abs(g)/(rx*ry)- m)/2.0;
  }
  else
  {
    float h = 2.0*m*n*sqrt( d );
    float s = sign(q+h)*pow(abs(q+h), 1.0/3.0);
    float u = sign(q-h)*pow(abs(q-h), 1.0/3.0);
    float rx = -s - u - c*4.0 + 2.0*m2;
    float ry = (s - u)*sqrt(3.0);
    float rm = sqrt( rx*rx + ry*ry );
    co = (ry/sqrt(rm-rx)+2.0*g/rm-m)/2.0;
  }
  vec2 r = ab * vec2(co, sqrt(1.0-co*co));
  return length(r-p) * sign(p.y-r.y) * intensity;
}
// 眼睛外圈形状，https://www.shadertoy.com/view/XtVfRW
float sdVesica(vec2 p, float r, float d)
{
  p = abs(p);
  float b = sqrt(r*r-d*d);
  return ((p.x-b)*d>p.y*b) ? length(p-vec2(b,0.0))
                            : length(p-vec2(0.0,-d))-r;
}
float dot2( in vec2 v ) { return dot(v,v); }
// 眼睛外圈形状，https://www.shadertoy.com/view/NslXDM
float sdRoundedCross( in vec2 p, in float h )
{
  float k = 0.5*(h+1.0/h);
  p = abs(p);
  return ( p.x<1.0 && p.y<p.x*(k-h)+h ) ? 
            k-sqrt(dot2(p-vec2(1,k)))  :
          sqrt(min(dot2(p-vec2(0,h)),
                  dot2(p-vec2(1,0))));
}
// 外围火焰，https://www.shadertoy.com/view/lsf3RH
float snoise(vec3 uv, float res)
{
	const vec3 s = vec3(1e0, 1e2, 1e3);
	
	uv *= res;
	uv *= 1.5;
	
	vec3 uv0 = floor(mod(uv, res))*s;
	vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;
	
	vec3 f = fract(uv);
  f = f*f*(3.0-2.0*f);

	vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,
		      	  uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);

	vec4 r = fract(sin(v*1e-1)*1e3);
	// vec4 r = fract(sin(v*1e-1)*1e3)+0.15;
	float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
	
	r = fract(sin((v + uv1.z - uv0.z)*1e-1)*1e3);
	float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
	
	return mix(r0, r1, f.z)*uAmount-1.;
}

float opUnion(float d1,float d2)
{
  return min(d1,d2);
}

void main() {
  vec2 uv = vUv;
  uv = (uv - .5)*2.;

  float color1 = 1. - sdEllipse(uv, vec2(0.5, 0.31), 5.5);
  float color11 = 1. - sdVesica(uv, .65, .45)*5.5;
  float color111 = 1. - sdRoundedCross(uv*1.7, .25)*7.5;
  float color = opUnion(color1, color11);
  color = max(color, color111);

  float color2 = sdEllipse(uv, vec2(0.18, 0.03), 1.5)+0.14;
  color = opUnion(color, color2)*2.1;

  color -= 0.1;

  vec3 coord = vec3(atan(uv.x, uv.y)/6.2832 + .5, length(uv)*.4, .5);
  for(int i = 1; i <= 12; i++)
	{
		float power = pow(2.0, float(i));
		color += (1.2 / power) * snoise(coord*uResolution + vec3(0., uFireDirection*uTime*uFrequency1, -uTime*uFrequency2), power*15.);
	}

  gl_FragColor = vec4(color*uRed, pow(max(color, 0.), 2.)*0.4, pow(max(color, 0.), 3.)*0.15, color);
}

