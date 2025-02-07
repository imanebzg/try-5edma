import React from 'react';
import { Building2, Calendar, Star, Users } from '__barrel_optimize__?names=ArrowRight,Brain,Briefcase,Building2,Buildings,Calendar,ChevronRight,GraduationCap,HeartHandshake,Laptop,Mail,Phone,Plane,Star,Stethoscope,Target,Users!=!lucide-react';
// Stats array with updated metrics
const stats = [
  { icon: Users, value: '1000+', label: 'Jeunes Orientés' },
  { icon: Building2, value: '50+', label: 'Partenaires' },
  { icon: Calendar, value: '2000+', label: 'Stages Réalisés' },
  { icon: Star, value: '98%', label: 'Satisfaction' },
];
const Stats = () => {
  return (
    <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
            <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-blue-600">{stat.label}</div>
            </div>
            ))}
        </div>
        </div>
    </section>
    
  );
};

export default Stats;
