
import React, { useState } from 'react';
import { Shield, ShieldAlert, ShieldCheck, ShieldX } from 'lucide-react';

export const PasswordChecker: React.FC = () => {
  const [password, setPassword] = useState('');

  const getStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length > 8) strength += 25;
    if (/[A-Z]/.test(pwd)) strength += 25;
    if (/[0-9]/.test(pwd)) strength += 25;
    if (/[^A-Za-z0-9]/.test(pwd)) strength += 25;
    return strength;
  };

  const strength = getStrength(password);

  const getMessage = () => {
    if (strength === 0) return 'Enter a password to test';
    if (strength <= 50) return 'Weak - Too easy to hack!';
    if (strength <= 75) return 'Medium - Getting better...';
    return 'Strong - Great work!';
  };

  const getColor = () => {
    if (strength <= 50) return 'bg-red-500';
    if (strength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-md mx-auto w-full">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Shield className="text-emerald-500" />
        Test Your Password
      </h3>
      <input
        type="text"
        placeholder="Type a password..."
        className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none transition-all mb-4 text-lg"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
        <div 
          className={`h-full transition-all duration-500 ${getColor()}`} 
          style={{ width: `${strength}%` }}
        />
      </div>
      <p className="text-sm font-semibold text-slate-600 mb-4">{getMessage()}</p>
      
      <div className="space-y-2 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          {password.length > 8 ? <ShieldCheck className="text-green-500" size={16}/> : <ShieldX className="text-slate-300" size={16}/>}
          At least 8 characters
        </div>
        <div className="flex items-center gap-2">
          {/[A-Z]/.test(password) ? <ShieldCheck className="text-green-500" size={16}/> : <ShieldX className="text-slate-300" size={16}/>}
          Includes Uppercase
        </div>
        <div className="flex items-center gap-2">
          {/[0-9]/.test(password) ? <ShieldCheck className="text-green-500" size={16}/> : <ShieldX className="text-slate-300" size={16}/>}
          Includes Numbers
        </div>
        <div className="flex items-center gap-2">
          {/[^A-Za-z0-9]/.test(password) ? <ShieldCheck className="text-green-500" size={16}/> : <ShieldX className="text-slate-300" size={16}/>}
          Includes Symbols
        </div>
      </div>

      <div className="mt-6 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
        <p className="text-xs text-emerald-800 font-medium italic">
          Example of a strong password: <span className="font-mono bg-white px-1 rounded">Sch00l@2026!</span>
        </p>
      </div>
    </div>
  );
};
