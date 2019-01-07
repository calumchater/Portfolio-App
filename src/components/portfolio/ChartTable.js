import React from 'react'
import ChartItem from './ChartItem'

const ChartTable = ({ chart }) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Latest</th>
          <th scope="col">Previous</th>
          <th scope="col">Variation</th>
          <th scope="col">Low</th>
        </tr>
      </thead>
      <tbody>
        {chart.map((chartItem, index) => {
          return chartItem.change < 0 ? (
            <ChartItem key={'chartTable' + index} {...chartItem} stockIsUp />
          ) : (
            <ChartItem key={'chartTable' + index} {...chartItem} />
          )
        })}
      </tbody>
    </table>
  </div>
)

export default ChartTable
