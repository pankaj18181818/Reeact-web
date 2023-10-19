import React from 'react'
import './piechart'

const data = [
    { stock: "32", price: 19, totalSales: "40" },
    { stock: "32", price: 19, totalSales: "40" },
    { stock: "32", price: 19, totalSales: "40" },
   
   
]
function  Tablecontent() {
  return (
    <div className='tablecontent'>
        <table>
                <tr>
                    <th>stock</th>
                    <th>price</th>
                    <th>totalSales</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.stock}</td>
                            <td>{val.price}</td>
                            <td>{val.totalSales}</td>
                        </tr>
                    )
                })}
            </table>
    </div>
  )
}

export default  Tablecontent