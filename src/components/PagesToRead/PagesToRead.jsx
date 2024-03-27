
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredListedReadBooks } from "../../utilities/localStorage";

const colors = scaleOrdinal(schemeCategory10).range();
const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const books = useLoaderData();
    const [listedReadBooks, setListedReadBooks] = useState([]);
    const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const storedReadBookIds = getStoredListedReadBooks();
        if (books.length > 0) {
            const listedBooks = books.filter(book => storedReadBookIds.includes(book.bookId));
            setListedReadBooks(listedBooks);
        }
    }, [books]);
    useEffect(() => {
                const handleResize = () => {
                    const containerWidth = document.getElementById('chart-container').offsetWidth;
                    const containerHeight = 400; // Set initial or default height as needed
                    setChartDimensions({ width: containerWidth, height: containerHeight });
                };
        
                handleResize();
                window.addEventListener('resize', handleResize);
        
                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }, []);
    return (
        <div className="mt-10" id="chart-container">
        <div className="w-full h-96 md:h-80 lg:h-96">
        <BarChart
            
            width={chartDimensions.width}
            height={chartDimensions.height}
            data={listedReadBooks}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
        </div>
        </div>
        
        
    );
};
TriangleBar.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    props: PropTypes.object,
    fill: PropTypes.string,
    x: PropTypes.string,
    y: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    
} 

export default PagesToRead;



