varying vec2 vUv;
uniform float uTime;

// 眼睛瞳孔，https://www.shadertoy.com/view/XtVfRW
float sdVesica(vec2 p, float r, float d)
{
  p = abs(p);
  float b = sqrt(r*r-d*d);
  float final = ((p.x-b)*d>p.y*b) ? length(p-vec2(b,0.0)):length(p-vec2(0.0,-d))-r;
  return smoothstep(0., 0.5, final);
}

void main() {
  vec2 uv = vUv;
  uv = (uv - .5)*2.;

  float color = 1. - sdVesica(uv, .7, .47)*5.5;

  gl_FragColor = vec4(vec3(0.), color);
}

