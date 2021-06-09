import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: 'Page A', followers: 400, pv: 2400, amt: 2400}];

function Chart() {
  return (
    <div>
    <LineChart width={1000} height={200} data={data}>
    <Line type="monotone" dataKey="followers" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
    </div>
  )
}

export default Chart
