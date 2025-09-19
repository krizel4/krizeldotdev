import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CareerTimeline() {
  const [mounted, setMounted] = useState(false);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setMounted(true);
    
    // Create chart data only on client side
    const data = {
    series: [
      {
        data: [
          {
            x: 'SEM',
            y: [new Date('2015').getTime(), new Date().getTime()],
            fillColor: '#4F46E5',
          },
          {
            x: 'Email Marketing',
            y: [new Date('2015').getTime(), new Date().getTime()],
            fillColor: '#4F46E5',
          },
          {
            x: 'Frontend Dev',
            y: [new Date('2015').getTime(), new Date().getTime()],
            fillColor: '#4F46E5',
          },
          {
            x: 'Backend Dev',
            y: [new Date('2019-08-01').getTime(), new Date().getTime()],
            fillColor: '#7C3AED',
          },
          {
            x: 'Git',
            y: [new Date('2019-08-01').getTime(), new Date().getTime()],
            fillColor: '#7C3AED',
          },
          {
            x: 'Salesforce/Pardot',
            y: [new Date('2019-10-01').getTime(), new Date().getTime()],
            fillColor: '#F59E0B',
          },
          {
            x: 'Marketo',
            y: [new Date('2021-09-01').getTime(), new Date().getTime()],
            fillColor: '#10B981',
          },
          {
            x: 'Tableau',
            y: [new Date('2022-12-01').getTime(), new Date().getTime()],
            fillColor: '#10B981',
          },
          {
            x: 'Tableau',
            y: [new Date('2022-12-01').getTime(), new Date().getTime()],
            fillColor: '#10B981',
          },
          {
            x: 'Apex & SOQL',
            y: [new Date('2023-09').getTime(), new Date().getTime()],
            fillColor: '#10B981',
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'rangeBar',
        background: 'transparent',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        selection: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%',
          rangeBarGroupRows: false,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          const start = new Date(val[0]);
          const end = new Date(val[1]);
          const years = Math.round(
            (end - start) / (1000 * 60 * 60 * 24 * 365.25)
          );
          return `${years}y`;
        },
        style: {
          colors: ['#ffffff'],
          fontSize: '12px',
          fontWeight: 600,
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#9CA3AF',
            fontSize: '12px',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#9CA3AF',
            fontSize: '13px',
            fontWeight: 500,
          },
        },
      },
      grid: {
        show: true,
        borderColor: '#374151',
        strokeDashArray: 3,
        position: 'back',
      },
      tooltip: {
        enabled: true,
        theme: 'dark',
        x: {
          format: 'MMM yyyy',
        },
        y: {
          formatter: function (val, opts) {
            // Try to get the start date from the data
            if (opts && opts.seriesIndex !== undefined && opts.dataPointIndex !== undefined) {
              try {
                const seriesIndex = opts.seriesIndex;
                const dataPointIndex = opts.dataPointIndex;
                const seriesData = opts.w.config.series[seriesIndex].data[dataPointIndex];
                const start = new Date(seriesData.y[0]);
                return start.toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric',
                });
              } catch (error) {
                // Fallback to showing just the year if available
                return '2015';
              }
            }
            
            // Fallback: return a default start date
            return '2015';
          },
        },
      },
      legend: {
        show: false,
      },
    },
    };
    
    setChartData(data);
  }, []);

  if (!mounted || !chartData) {
    return (
      <div className="w-full h-[250px] mobile:h-[300px] tablet:h-[350px] bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400 text-sm mobile:text-base">Loading timeline...</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="thick-underline">
        Technical Skills
      </h2>
      <div className="bg-white dark:bg-gray-900 rounded-lg p-2 mobile:p-3 tablet:p-4 border border-gray-200 dark:border-gray-700">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="rangeBar"
          height={350}
        />
      </div>
    </div>
  );
}
