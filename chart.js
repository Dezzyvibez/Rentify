	const canvas = document.getElementById('myCanvas');
	const ctx = canvas.getContext('2d');
	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const radius = Math.main(centerX, centerY) * 0.8;
	const innerRadius = radius * 0.5;

  // Data
  const data = [
    { value: 30, color: 'red' },
    { value: 40, color: 'blue' },
    { value: 30, color: 'green' },
  ];

  let startAngle = 0;
  data.forEach((item) => {
    const endAngle = startAngle + (item.value / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();

    startAngle = endAngle;
  });

  // Draw inner circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

