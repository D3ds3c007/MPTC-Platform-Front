import React, { useEffect, useRef, useState } from 'react';
import styles from './MChart.module.css';

const MChart = ({ labels = [], scores = [] }) => {
  const canvasRef = useRef(null);
  const [isChartLoaded, setIsChartLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => setIsChartLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isChartLoaded || scores.length === 0) return;

    const ctx = canvasRef.current.getContext('2d');
    const maxNote = Math.max(...scores);

    const chart = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Note / 20',
          data: scores,
          backgroundColor: (context) => {
            const value = scores[context.dataIndex];
            return value === maxNote ? '#00008B' : '#d0d0ff';
          },
          borderRadius: 10,
          barThickness: 50
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 20,
            ticks: { stepSize: 5 },
            title: { display: true, text: 'Note' }
          },
          x: {
            title: { display: true, text: 'Compétence' }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                return 'Note : ' + context.raw.toFixed(2).replace('.', ',');
              }
            }
          },
          legend: { display: false }
        }
      }
    });

    return () => chart.destroy();
  }, [isChartLoaded, labels, scores]);

  return (
    <div style={{
      border:'2px solid #CFD4FA',
      borderRadius: '12px',
      // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      marginLeft:'60px',
      marginRight:'0px',
      width: '500px',
      
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 className={styles.title}>Linguistic competence of the students</h2>
      
      {scores.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999' }}>Aucune note à afficher.</p>
      ) : (
        <canvas ref={canvasRef} width="400" height="300"></canvas>
      )}
    </div>
  );
};

export default MChart;
