varying vec2 vUv;
uniform float uTime;
uniform float uColor;
uniform float uPower;
uniform float uResolution;
uniform float uWave;
uniform float uDirection;
uniform float uFrequency;

// 眼睛瞳孔，https://www.shadertoy.com/view/XtVfRW
float sdVesica(vec2 p, float r, float d)
{
  p = abs(p);
  float b = sqrt(r*r-d*d);
  float final = ((p.x-b)*d>p.y*b) ? length(p-vec2(b,0.0)):length(p-vec2(0.0,-d))-r;
  return smoothstep(0., 0.5, final);
}

// 外围火焰，https://www.shadertoy.com/view/lsf3RH
float snoise(vec3 uv, float res)
{
	const vec3 s = vec3(1e0, 1e2, 1e3);
	
	uv *= res;
	
	vec3 uv0 = floor(mod(uv, res))*s;
	vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;
	
	vec3 f = fract(uv);
  f = f*f*(3.0-2.0*f);

	vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,
		      	  uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);

	vec4 r = fract(sin(v*1e-1)*1e3);
	float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
	
	r = fract(sin((v + uv1.z - uv0.z)*1e-1)*1e3);
	float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
	
	return mix(r0, r1, f.z)*2.-1.;
}

float opSubtraction(float d1,float d2)
{
  return max(-d1,d2);
}

void main() {
  vec2 uv = vUv;
  uv = (uv - .5)*2.;

  float color1 = 1. - sdVesica(uv, .65, .45)*5.5;
  float color2 = 1. - sdVesica(uv, .55, .35)*5.5;
  float color = 1. - opSubtraction(color1, color2);

  vec3 coord = vec3(atan(uv.x, uv.y)/uWave + .5, length(uv)*.4, .5);
  for(int i = 1; i <= 12; i++)
	{
		float power = pow(2.0, float(i));
		color += (uPower / power) * snoise(coord + vec3(0., uDirection*uTime*uFrequency, -uTime*.05), power*uResolution);
	}

  gl_FragColor = vec4(color, pow(max(color,0.),2.)*uColor, pow(max(color,0.),3.)*0.15, color);
}

