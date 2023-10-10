varying vec2 vUv;

uniform float uTime;

// 闪电：https://www.shadertoy.com/view/MllGRl
#define time  uTime*5.

float hash( in vec2 p ) 
{
  return fract(sin(p.x*15.32+p.y*35.78) * 43758.23);
}

vec2 hash2(vec2 p)
{
	return vec2(hash(p*.754),hash(1.5743*p.yx+4.5891))-.5;
}

vec2 add = vec2(1.0, 0.0);

vec2 noise2(vec2 x)
{
  vec2 p = floor(x);
  vec2 f = fract(x);
  f = f*f*(3.0-2.0*f);
  
  return mix(mix( hash2(p),          hash2(p + add.xy),f.x),
                  mix( hash2(p + add.yx), hash2(p + add.xx),f.x),f.y);  
}

float dseg( vec2 ba, vec2 pa )
{	
	float h = clamp(dot(pa,ba)/dot(ba,ba), 0., 1.5);	
	return length( pa - ba*h );
}

float arc(vec2 x,vec2 p, vec2 dir)
{
  vec2 r = p;
  float d=10.;
  for (int i = 0; i < 5; i++)
  {
      vec2 s= noise2(r+time)+dir;
      d=min(d,dseg(s,x-r));
      r +=s;      
  }
  return d*3.;
}

float thunderbolt(vec2 x)
{
  vec2 r = vec2(8.,1.);
  float d=1000.;
  if((x).y<abs((x-r).x))return d;    
  for (int i = 0; i < 19; i++)
  {
      if(r.y>x.y+.5)break;
      vec2 s= noise2(r+time)+vec2(0.,.7);
      d=min(d,dseg(s,x-r));
      r +=s;
      if(i-(i/5)*5==0){
          if(i-(i/10)*10==0)d=min(d,arc(x,r,vec2(.3,.5)));
          else d=min(d,arc(x,r,vec2(-.3,.5)));
      }
  }
  return d;
}

vec2 fbm2(vec2 x)
{
  vec2 r = x; 
  for (int i = 0; i < 9; i++)
  {
      vec2 s= .5*noise2(r+time);
      r +=s;      
  }
  return r-x;
}

void main() {
  vec2 uv = vUv;
  uv.x += 0.1;
  uv = 4.*uv*uv.xy;
  uv*=5.;
  float c = thunderbolt(uv+.06*fbm2(5.*uv));
  c=exp(-4.*c);
  vec3 col;
  col=clamp(2.*vec3(0.9294, 0.5882, 0.2706)*c,0.,1.);

  gl_FragColor = vec4(col, col.r);
}

