import React from 'react';
import { MessageCircle, Users, Heart, Calendar } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      date: "July 3rd, 2023",
      title: "First Talk",
      description: "The day our hearts first connected through words. A conversation that would change everything.",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "from-blue-400 to-purple-500"
    },
    {
      date: "July 19th, 2023",
      title: "First In-Person Talk",
      description: "When words became reality and we met face to face. The spark was undeniable.",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      date: "August 29th, 2023",
      title: "First Kiss",
      description: "The moment that sealed our fate. Our first kiss under the stars, marking the beginning of forever.",
      icon: <Heart className="w-6 h-6" fill="currentColor" />,
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Calendar className="w-12 h-12 text-pink-500 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-dancing">
            Our Beautiful Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every milestone in our love story, each moment more precious than the last.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-purple-300 to-rose-300"></div>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
              alt="Timeline background" 
              className="w-full h-full object-cover"
            />
          </div>

          {events.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className={`absolute left-2 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${event.color} border-4 border-white shadow-lg z-10`}>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-100/50 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${event.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {event.icon}
                  </div>
                  
                  <div className="text-sm text-pink-500 font-semibold mb-2 uppercase tracking-wide">
                    {event.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-dancing">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;