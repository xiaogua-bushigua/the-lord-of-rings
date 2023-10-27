varying vec2 vUv;

uniform float uTime;
uniform float uStrength;
uniform float uWave;
uniform vec3 uBackColor;
uniform vec3 uColor;

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
  
  vec2 t = smoothstep(0., 1.0, fp);
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
      p *= uWave;
      amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  uv = (uv-.5)*2.5;
  uv += 2. * fbm(uv+0.8*uTime, 15) - .5;
    
  float dist = abs(uv.y);
  vec3 col = uColor * pow(mix(0., 0.015, hash11(uTime)) / dist, 1.);
  
  col = pow(col, uBackColor);

  float d = 1. - length(uv);
  float alpha = min(d*uStrength, col.r)*2.1;
  float gradual = abs(sin(4.*uTime));
  alpha *= gradual;

  gl_FragColor = vec4(col, alpha);
}

