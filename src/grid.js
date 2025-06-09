export default function(step = 10) {
  let nDim,
    dims,
    nodes = [],
    stepX = step,
    stepY = step,
    stepZ = step,
    strength = 0.3,
    considerAlpha = false;

  function force(alpha) {
    const acceleration = strength * (considerAlpha ? alpha : 1);

    nodes.forEach(node => {
      dims.forEach(({ dim, v, step}) => {
        const pos = node[dim];
        const target = Math.round(pos / step) * step;
        node[v] += (target - pos) * acceleration;
      });
    });
  }

  force.initialize = function(initNodes, ...args) {
    nodes = initNodes;

    nDim = args.find(arg => [1, 2, 3].includes(arg)) || 2;
    dims = ['x', nDim > 1 ? 'y' : null, nDim > 2 ? 'z' : null].filter(d => d).map(dim => ({
      dim,
      v: `v${dim}`,
      step: { x: stepX, y: stepY, z: stepZ }[dim],
    }));
  };

  force.step = function(_) {
    return arguments.length ? (stepX = stepY = stepZ = _, force) : stepX;
  };

  force.stepX = function(_) {
    return arguments.length ? (stepX = _, force) : stepX;
  };

  force.stepY = function(_) {
    return arguments.length ? (stepY = _, force) : stepY;
  };

  force.stepZ = function(_) {
    return arguments.length ? (stepZ = _, force) : stepZ;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = _, force) : strength;
  };

  force.considerAlpha = function(_) {
    return arguments.length ? (considerAlpha = _, force) : considerAlpha;
  };

  return force;
}
