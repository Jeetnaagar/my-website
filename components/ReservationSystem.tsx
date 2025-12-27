
import React, { useState, useMemo } from 'react';
import { Calendar, Users, Clock, CheckCircle2, AlertCircle, ArrowRight, User, Mail, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

type Step = 'details' | 'confirm';

const ReservationSystem: React.FC = () => {
  const [step, setStep] = useState<Step>('details');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Mocked capacity logic: some slots are "busier" than others
  const availableSlots = useMemo(() => {
    if (!date) return [];
    
    // Simulate that the capacity of 54 is shared across multiple bookings
    // For a real app, this would be an API call
    return BUSINESS_INFO.timeSlots.map(slot => {
      // Randomly simulate occupancy for the demo
      const seed = (new Date(date).getTime() + slot.length) % 100;
      const occupiedSeats = Math.floor(seed % 45); 
      const remaining = BUSINESS_INFO.capacity - occupiedSeats;
      return {
        time: slot,
        available: remaining >= guests,
        remaining
      };
    });
  }, [date, guests]);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const isFormValid = date && time && userInfo.name && userInfo.email && userInfo.phone;

  if (showSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 animate-in fade-in zoom-in duration-500 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-serif text-lucca-burgundy mb-4">Table Reserved!</h3>
        <p className="text-stone-600 mb-8 max-w-sm mx-auto">
          Grazie, {userInfo.name.split(' ')[0]}! We've sent a confirmation email to <span className="font-semibold">{userInfo.email}</span>. We look forward to seeing you.
        </p>
        <div className="bg-stone-50 p-6 rounded-xl text-left mb-8 space-y-3">
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500">Date & Time</span>
            <span className="font-semibold">{date} at {time}</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500">Guests</span>
            <span className="font-semibold">{guests} People</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Location</span>
            <span className="font-semibold">56 N Last Chance Gulch</span>
          </div>
        </div>
        <button 
          onClick={() => { setShowSuccess(false); setStep('details'); setTime(''); }}
          className="text-lucca-gold font-bold hover:underline"
        >
          Make another reservation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100">
      <div className="bg-lucca-burgundy p-6 text-white">
        <h3 className="text-2xl font-serif">Reserve a Table</h3>
        <p className="text-stone-300 text-sm mt-1">Available Wednesday - Sunday from 5:00 PM</p>
      </div>

      <form onSubmit={handleBooking} className="p-8 space-y-6">
        {step === 'details' ? (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-lucca-gold" /> Select Date
                </label>
                <input 
                  type="date" 
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-lucca-gold/50 outline-none transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  <Users className="w-4 h-4 text-lucca-gold" /> Party Size
                </label>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-lucca-gold/50 outline-none transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {date && (
              <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-lucca-gold" /> Available Times
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {availableSlots.map(slot => (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setTime(slot.time)}
                      className={`py-3 px-2 rounded-xl text-sm font-medium transition-all border ${
                        time === slot.time 
                        ? 'bg-lucca-gold text-white border-lucca-gold shadow-lg scale-105' 
                        : slot.available 
                          ? 'bg-white text-stone-700 border-stone-200 hover:border-lucca-gold hover:text-lucca-gold'
                          : 'bg-stone-100 text-stone-400 border-stone-100 cursor-not-allowed italic'
                      }`}
                    >
                      {slot.time}
                      {!slot.available && <span className="block text-[10px] mt-1 uppercase">Full</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              disabled={!date || !time}
              onClick={() => setStep('confirm')}
              className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 disabled:opacity-50 transition-all"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 flex justify-between items-center">
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-bold">Booking For</p>
                <p className="font-serif text-lg">{date} at {time} • {guests} Guests</p>
              </div>
              <button 
                type="button"
                onClick={() => setStep('details')}
                className="text-xs text-lucca-gold font-bold underline"
              >
                Change
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-lucca-gold" /> Full Name
                </label>
                <input 
                  required
                  type="text"
                  placeholder="John Doe"
                  value={userInfo.name}
                  onChange={e => setUserInfo({...userInfo, name: e.target.value})}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-lucca-gold/50 outline-none transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-lucca-gold" /> Email Address
                </label>
                <input 
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={userInfo.email}
                  onChange={e => setUserInfo({...userInfo, email: e.target.value})}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-lucca-gold/50 outline-none transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-lucca-gold" /> Phone Number
                </label>
                <input 
                  required
                  type="tel"
                  placeholder="(406) 555-0123"
                  value={userInfo.phone}
                  onChange={e => setUserInfo({...userInfo, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-lucca-gold/50 outline-none transition-all" 
                />
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <p className="text-xs text-amber-800 leading-relaxed">
                Table will be held for 15 minutes past your reservation time. Please call us if you're running late.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="w-full bg-lucca-burgundy text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-lucca-burgundy/90 transition-all shadow-xl shadow-lucca-burgundy/20"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>Confirm Reservation</>
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ReservationSystem;
