
import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Info, MailWarning } from 'lucide-react';

export const PhishingSimulator: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 max-w-2xl mx-auto w-full transition-all">
      {/* Email Header */}
      <div className="bg-slate-800 p-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <MailWarning size={18} className="text-amber-400" />
          <span className="font-semibold text-sm">External Message</span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">school-admin-support@gmail-server.net</span>
      </div>
      
      {/* Email Body */}
      <div className="p-5">
        <div className="mb-4 space-y-1">
          <p className="text-slate-800 font-bold text-base md:text-lg">Subject: URGENT: Password Reset Required</p>
          <div className="h-px bg-slate-100 w-full" />
        </div>

        <div className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed">
          <p>Dear Staff Member,</p>
          <p>Our school IT system has detected unauthorized access to your account. For your safety, you must reset your password immediately using our new secure portal.</p>
          
          <div className="py-2">
            <button 
              disabled={revealed}
              className="block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm active:scale-[0.98]"
            >
              Click here to Secure Your Account
            </button>
          </div>
          
          <p className="text-xs text-red-600 font-medium">Failure to do so within 2 hours will result in permanent account suspension.</p>
          <p className="text-sm">Regards,<br/>School IT Management</p>
        </div>

        {/* Reveal Section */}
        {!revealed ? (
          <button 
            onClick={() => setRevealed(true)}
            className="mt-6 w-full flex items-center justify-center gap-2 p-3 border-2 border-amber-500 text-amber-600 rounded-xl font-bold hover:bg-amber-50 transition-colors animate-pulse"
          >
            <Info size={18} />
            Analyze this email for risks
          </button>
        ) : (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
              <AlertCircle size={16} />
              Security Red Flags:
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-amber-900 list-none pl-1">
              <li className="flex gap-2">
                <span className="font-bold text-amber-600">1.</span>
                <span><strong className="font-bold">Suspicious Sender:</strong> Uses "gmail-server.net" instead of your school domain.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600">2.</span>
                <span><strong className="font-bold">False Urgency:</strong> Threatens "permanent suspension" to make you panic.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-amber-600">3.</span>
                <span><strong className="font-bold">Generic Greeting:</strong> Uses "Dear Staff Member" instead of your name.</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-emerald-700 font-bold bg-white p-2 rounded-lg border border-emerald-100 shadow-sm text-sm">
              <CheckCircle size={18} className="flex-shrink-0" />
              Correct Action: Report to IT and DO NOT click!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
