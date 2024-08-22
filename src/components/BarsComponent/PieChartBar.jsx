import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const PieChartBar = ({ data, color, value }) => {
  return (
    <PieChart
      className='w-24'
      data={data.map((item, index) => ({
        title: item,
        value: value[index],
        color: color[index],
      }))}
    />
  )
}

export default PieChartBar