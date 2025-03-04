import { Link } from 'react-router-dom'
import React from 'react'
import { 
  FaHeart,
  FaWheelchair,
  FaEdit,
  FaSearch,
  FaCheckDouble
} from 'react-icons/fa'

const services = [
  { 
    title: 'New Marriage Registration', 
    path: '/new',
    color: 'bg-[#2C4E2D]',
    icon: <FaHeart className="w-[50px] h-[50px] mb-4 text-white font-black" />
  },
  { 
    title: 'Handicap Marriage Registration', 
    path: '/handicap',
    color: 'bg-[#7D1717]',
    icon: <FaWheelchair className="w-12 h-12 mb-4 text-white font-black" />
  },
  { 
    title: 'Update Registration', 
    path: '/update',
    color: 'bg-[#1E4577]',
    icon: <FaEdit className="w-[50px] h-[50px] mb-4 text-white font-black" />
  },
  { 
    title: 'Search Marriage', 
    path: '/search',
    color: 'bg-[#4A3C08]',
    icon: <FaSearch className="w-[50px] h-[50px] mb-4 text-white font-black" />
  },
  { 
    title: 'Worker login', 
    path: '/verified',
    color: 'bg-[#017285]',
    icon: <FaCheckDouble className="w-[50px] h-[50px] mb-4 text-white font-black" />
  },
]

export default function ServicesGrid() {
  return (
    <div className="container mx-auto px-1 py-1 bg-white shadow-lg rounded-lg"> 
      <div className="grid md:grid-cols-5 grid-cols-1 gap-1">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.path}
            className={`${service.color} p-6 shadow-md hover:shadow-lg transition-all transform hover:scale-102 text-center h-[125px] flex flex-col items-center justify-center`}
          >
            {service.icon}
            <h3 className="text-[14px] font-[700] text-white uppercase font-mukta">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  )
}