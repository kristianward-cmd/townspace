
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SalesNotification {
  id: string;
  firstName: string;
  lastInitial: string;
  city: string;
  state: string;
  service: string;
  timeAgo: string;
  mapUrl: string;
}

const notifications: SalesNotification[] = [
  {
    id: '1',
    firstName: 'Emily',
    lastInitial: 'M',
    city: 'New York',
    state: 'NY',
    service: 'Professional Website',
    timeAgo: '2 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20New%20York%20city%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map1&orientation=squarish'
  },
  {
    id: '2',
    firstName: 'Michael',
    lastInitial: 'R',
    city: 'Los Angeles',
    state: 'CA',
    service: 'E-commerce Website',
    timeAgo: '5 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Los%20Angeles%20California%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map2&orientation=squarish'
  },
  {
    id: '3',
    firstName: 'Sarah',
    lastInitial: 'K',
    city: 'Chicago',
    state: 'IL',
    service: 'Business Website',
    timeAgo: '8 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Chicago%20Illinois%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map3&orientation=squarish'
  },
  {
    id: '4',
    firstName: 'David',
    lastInitial: 'L',
    city: 'Houston',
    state: 'TX',
    service: 'Restaurant Website',
    timeAgo: '12 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Houston%20Texas%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map4&orientation=squarish'
  },
  {
    id: '5',
    firstName: 'Jessica',
    lastInitial: 'W',
    city: 'Phoenix',
    state: 'AZ',
    service: 'Medical Website',
    timeAgo: '15 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Phoenix%20Arizona%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map5&orientation=squarish'
  },
  {
    id: '6',
    firstName: 'Robert',
    lastInitial: 'T',
    city: 'Philadelphia',
    state: 'PA',
    service: 'Law Firm Website',
    timeAgo: '18 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Philadelphia%20Pennsylvania%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map6&orientation=squarish'
  },
  {
    id: '7',
    firstName: 'Amanda',
    lastInitial: 'H',
    city: 'San Antonio',
    state: 'TX',
    service: 'Dental Website',
    timeAgo: '22 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20San%20Antonio%20Texas%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map7&orientation=squarish'
  },
  {
    id: '8',
    firstName: 'Christopher',
    lastInitial: 'B',
    city: 'San Diego',
    state: 'CA',
    service: 'Real Estate Website',
    timeAgo: '25 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20San%20Diego%20California%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map8&orientation=squarish'
  },
  {
    id: '9',
    firstName: 'Ashley',
    lastInitial: 'G',
    city: 'Dallas',
    state: 'TX',
    service: 'Fitness Website',
    timeAgo: '28 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Dallas%20Texas%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map9&orientation=squarish'
  },
  {
    id: '10',
    firstName: 'Matthew',
    lastInitial: 'S',
    city: 'San Jose',
    state: 'CA',
    service: 'Tech Startup Website',
    timeAgo: '32 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20San%20Jose%20California%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map10&orientation=squarish'
  },
  {
    id: '11',
    firstName: 'Jennifer',
    lastInitial: 'D',
    city: 'Austin',
    state: 'TX',
    service: 'Consulting Website',
    timeAgo: '35 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Austin%20Texas%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map11&orientation=squarish'
  },
  {
    id: '12',
    firstName: 'Daniel',
    lastInitial: 'P',
    city: 'Jacksonville',
    state: 'FL',
    service: 'Construction Website',
    timeAgo: '38 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Jacksonville%20Florida%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map12&orientation=squarish'
  },
  {
    id: '13',
    firstName: 'Michelle',
    lastInitial: 'C',
    city: 'Fort Worth',
    state: 'TX',
    service: 'Beauty Salon Website',
    timeAgo: '42 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Fort%20Worth%20Texas%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map13&orientation=squarish'
  },
  {
    id: '14',
    firstName: 'Kevin',
    lastInitial: 'A',
    city: 'Columbus',
    state: 'OH',
    service: 'Accounting Website',
    timeAgo: '45 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Columbus%20Ohio%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map14&orientation=squarish'
  },
  {
    id: '15',
    firstName: 'Lisa',
    lastInitial: 'F',
    city: 'Charlotte',
    state: 'NC',
    service: 'Photography Website',
    timeAgo: '48 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Charlotte%20North%20Carolina%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map15&orientation=squarish'
  },
  {
    id: '16',
    firstName: 'Brian',
    lastInitial: 'N',
    city: 'San Francisco',
    state: 'CA',
    service: 'Marketing Agency Website',
    timeAgo: '52 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20San%20Francisco%20California%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map16&orientation=squarish'
  },
  {
    id: '17',
    firstName: 'Nicole',
    lastInitial: 'J',
    city: 'Indianapolis',
    state: 'IN',
    service: 'Veterinary Website',
    timeAgo: '55 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Indianapolis%20Indiana%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map17&orientation=squarish'
  },
  {
    id: '18',
    firstName: 'Ryan',
    lastInitial: 'V',
    city: 'Seattle',
    state: 'WA',
    service: 'Coffee Shop Website',
    timeAgo: '58 minutes ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Seattle%20Washington%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map18&orientation=squarish'
  },
  {
    id: '19',
    firstName: 'Stephanie',
    lastInitial: 'Q',
    city: 'Denver',
    state: 'CO',
    service: 'Yoga Studio Website',
    timeAgo: '1 hour ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Denver%20Colorado%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map19&orientation=squarish'
  },
  {
    id: '20',
    firstName: 'Jason',
    lastInitial: 'Z',
    city: 'Washington',
    state: 'DC',
    service: 'Government Contractor Website',
    timeAgo: '1 hour ago',
    mapUrl: 'https://readdy.ai/api/search-image?query=large%20prominent%20red%20location%20pin%20marker%20on%20detailed%20street%20map%20background%20showing%20Washington%20DC%20area%20with%20clear%20roads%20and%20landmarks%20visible%20high%20contrast%20bold%20colors&width=80&height=80&seq=map20&orientation=squarish'
  }
];

export default function SalesNotificationWidget() {
  const [currentNotification, setCurrentNotification] = useState<SalesNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [usedNotifications, setUsedNotifications] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const getRandomNotification = () => {
    const availableNotifications = notifications.filter(n => !usedNotifications.has(n.id));
    
    if (availableNotifications.length === 0) {
      setUsedNotifications(new Set());
      return notifications[Math.floor(Math.random() * notifications.length)];
    }
    
    return availableNotifications[Math.floor(Math.random() * availableNotifications.length)];
  };

  const showNotification = () => {
    const notification = getRandomNotification();
    setUsedNotifications(prev => new Set([...prev, notification.id]));
    setCurrentNotification(notification);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  };

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 3000);

    const interval = setInterval(() => {
      showNotification();
    }, 12000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  if (!currentNotification || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <img
              src={currentNotification.mapUrl}
              alt={`${currentNotification.city}, ${currentNotification.state}`}
              className="w-16 h-16 rounded-lg object-cover border border-gray-200"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-600">Just signed up</span>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {currentNotification.firstName} {currentNotification.lastInitial}. from {currentNotification.city}, {currentNotification.state}
            </p>
            <p className="text-xs text-gray-600 mb-1">
              {currentNotification.service}
            </p>
            <p className="text-xs text-gray-500">
              {currentNotification.timeAgo}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <i className="ri-close-line text-sm"></i>
          </button>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <button 
            onClick={handleSignUpClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
