import React from 'react';
import * as d3 from 'd3';
import { Route, Component } from 'ext-react';
import DashboardView from './dashboard.view';

@Route('/')
@Component({
  view: DashboardView
})
export default class {
  constructor() {
    this.title = 'Dashboard';
  }

  renderChart() {
    this.renderPieChart();
    this.renderDonutChart();
  }

  renderPieChart() {
    const dataset = [
            { label: 'Abulia', count: 10 },
            { label: 'Betelgeuse', count: 20 },
            { label: 'Cantaloupe', count: 30 },
            { label: 'Dijkstra', count: 40 }
          ],
          width = 360,
          height = 360,
          radius = Math.min(width, height) / 2,
          // color = d3.scaleOrdinal(d3.schemeCategory20b),
          color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']),
          svg = d3.select('#pie')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .append('g')
                  .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')'),
          arc = d3.arc()
                  .innerRadius(0)
                  .outerRadius(radius),
          pie = d3.pie()
                  .value(d => d.count)
                  .sort(null),
          path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', (d, i) => color(d.data.label));
  }

  renderDonutChart() {
    const dataset = [
            { label: 'Abulia', count: 10 },
            { label: 'Betelgeuse', count: 20 },
            { label: 'Cantaloupe', count: 30 },
            { label: 'Dijkstra', count: 40 }
          ],
          width = 360,
          height = 360,
          radius = Math.min(width, height) / 2,
          donutWidth = 75,
          // color = d3.scaleOrdinal(d3.schemeCategory20b),
          color = d3.scaleOrdinal().range(['#A60F2B', '#648C85', '#B3F2C9', '#528C18', '#C3F25C']),
          svg = d3.select('#donut')
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .append('g')
                  .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')'),
          arc = d3.arc()
                  .innerRadius(radius - donutWidth)
                  .outerRadius(radius),
          pie = d3.pie()
                  .value(d => d.count)
                  .sort(null),
          path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', (d, i) => color(d.data.label)),
          legendRectSize = 18,
          legendSpacing = 4,
          legend = svg.selectAll('.legend')
                      .data(color.domain())
                      .enter()
                      .append('g')
                      .attr('class', 'legend')
                      .attr('transform', (d, i) => {
                        const height = legendRectSize + legendSpacing,
                              offset =  height * color.domain().length / 2,
                              horz = -2 * legendRectSize,
                              vert = i * height - offset;
                        return 'translate(' + horz + ',' + vert + ')';
                      }),
          tooltip = d3.select('#donut')
                      .append('div')
                      .attr('class', 'tooltip');
    legend.append('rect').attr('width', legendRectSize).attr('height', legendRectSize).style('fill', color).style('stroke', color);
    legend.append('text').attr('x', legendRectSize + legendSpacing).attr('y', legendRectSize - legendSpacing).text(d => d);
    tooltip.append('div').attr('class', 'label');
    tooltip.append('div').attr('class', 'count');
    tooltip.append('div').attr('class', 'percent');
    path.on('mouseover', d => {
      const total = d3.sum(dataset.map(d => d.count)),
            percent = Math.round(1000 * d.data.count / total) / 10;
      tooltip.select('.label').html(d.data.label);
      tooltip.select('.count').html(d.data.count);
      tooltip.select('.percent').html(percent + '%');
      tooltip.style('position', 'absolute').style('display', 'block');
    });
    path.on('mousemove', d => tooltip.style('top', (d3.event.layerY + 10) + 'px').style('left', (d3.event.layerX + 10) + 'px'));
    path.on('mouseout', () => tooltip.style('display', 'none'));
  }
}