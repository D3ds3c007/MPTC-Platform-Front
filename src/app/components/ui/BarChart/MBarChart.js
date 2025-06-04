import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './MBarChart.module.css';

const data = [
  { name: 'READING', value: 15 },
  { name: 'GRAMMAR', value: 15 },
  { name: 'WRITING', value: 15 },
  { name: 'LISTENING', value: 15 },
  { name: 'VOCABULARY', value: 15 }
];

const CustomBar = ({ x, y, width, height, fill, onClick, onMouseEnter, onMouseLeave }) => {
  const barHeight = height - 10;
  const radius = 20;

  return (
    <g
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      cursor="pointer"
    >
      <rect
        x={x}
        y={y + 10}
        width={width}
        height={barHeight}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

export function MBarChart() {
  const [selected, setSelected] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleBarClick = (data) => {
    setSelected(data);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Average notes per Section</h2>
      {selected && (
        <div className={styles.tooltip}>Read : {selected.value}</div>
      )}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barCategoryGap={40}>
          <XAxis dataKey="name" stroke="#000" tick={{ fill: '#000', fontSize: 14 }} />
          <Tooltip content={<></>} />
          <Bar
            dataKey="value"
            shape={(props) => (
              <CustomBar
                {...props}
                fill={hoveredIndex === props.index ? '#0000a0' : '#d3d3f8'}
                onMouseEnter={() => handleMouseEnter(props.index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleBarClick(props.payload)}
              />
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
