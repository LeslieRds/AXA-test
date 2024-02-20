import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../api/stockDataService';
import EditableTableComponent from './EditableTableComponent';
import * as d3 from 'd3';

const DataDisplayComponent = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetchStockData().then(data => {
      setStockData(data);
      drawChart(data);
    });
  }, []);

const drawChart = (data) => {
  const svgWidth = 600, svgHeight = 400;
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  d3.select('#chart').select('svg').remove();

  const svg = d3.select('#chart').append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleTime().rangeRound([0, width]);
  const y = d3.scaleLinear().rangeRound([height, 0]);

  const line = d3.line()
    .x(d => x(new Date(d.timestamp)))
    .y(d => y(d.index));

  x.domain(d3.extent(data, d => new Date(d.timestamp)));
  y.domain(d3.extent(data, d => d.index));

  svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .select('.domain')
    .remove();

  svg.append('g')
    .call(d3.axisLeft(y))
    .append('text')
    .attr('fill', '#000')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Index');

  svg.append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d', line);
};

  return (
    <div>
      <h2>Stock Data Evolution</h2>
      <div id="chart"></div>
      <EditableTableComponent data={stockData} onDataChange={(newData) => setStockData(newData)} />
    </div>
  );
};

export default DataDisplayComponent;
