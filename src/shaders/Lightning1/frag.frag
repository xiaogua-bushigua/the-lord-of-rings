varying vec2 vUv;

uniform float uTime;

// 闪电：https://www.shadertoy.com/view/dsXfDn
float hash11(float p)
{
  p = fract(p * .1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash12(vec2 p)
{
	vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

mat2 rotate2d(float theta)
{
  float c = cos(theta);
  float s = sin(theta);
  return mat2(
      c, -s,
      s, c
  );
}

float noise(vec2 p)
{
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float a = hash12(ip);
  float b = hash12(ip + vec2(1, 0));
  float c = hash12(ip + vec2(0, 1));
  float d = hash12(ip + vec2(1, 1));
  
  vec2 t = smoothstep(0.0, 1.0, fp);
  return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}

float fbm(vec2 p, int octaveCount)
{
  float value = 0.;
  float amplitude = 0.25;
  for (int i = 0; i < octaveCount; ++i)
  {
      value += amplitude * noise(p);
      p *= rotate2d(0.25);
      p *= 2.0;
      amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  uv = (uv-.5)*2.;
  uv += 2.0 * fbm(uv+0.8*uTime, 15) - 0.5;
    
  float dist = abs(uv.y);
  vec3 col = vec3(0.9725, 0.6902, 0.2392) * pow(mix(0.0, 0.02, hash11(uTime)) / dist, 1.);
  
  col = pow(col, vec3(1.0));

  float d = 1. - length(uv);

  gl_FragColor = vec4(col, min(d*2.2, col.r));
  // gl_FragColor = vec4(col, col.r);
}

