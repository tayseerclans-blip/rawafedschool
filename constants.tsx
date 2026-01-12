
import React from 'react';
import { 
  ShieldAlert, 
  Lock, 
  Mail, 
  Bug, 
  Globe, 
  Users, 
  Smartphone, 
  UserPlus, 
  AlertCircle, 
  CheckCircle2,
  Goal,
  School
} from 'lucide-react';
import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 'intro',
    type: 'title',
    title: 'Cybersecurity Awareness in Schools',
    subtitle: 'Rawafed School: Protecting Our Computers and Internet Systems',
    accentColor: 'blue',
  },
  {
    id: 'objectives',
    type: 'list',
    title: 'Presentation Objectives',
    items: [
      'Protect students’ and staff data',
      'Prevent system and account breaches',
      'Reduce daily mistakes that cause security incidents'
    ],
    accentColor: 'indigo',
  },
  {
    id: 'importance',
    type: 'list',
    title: 'Why Cybersecurity Is Important',
    subtitle: 'Schools handle critical data every day.',
    items: [
      'Student records and grades',
      'Learning platforms and online systems',
      'Official school email accounts',
      'Data leakage risks',
      'Account hacking threats'
    ],
    accentColor: 'rose',
  },
  {
    id: 'passwords',
    type: 'interactive-password',
    title: '1. Password Security',
    subtitle: 'Your first line of defense.',
    accentColor: 'emerald',
  },
  {
    id: 'email',
    type: 'interactive-phishing',
    title: '2. School Email Security',
    subtitle: 'Think before you click.',
    accentColor: 'amber',
  },
  {
    id: 'malware',
    type: 'danger-grid',
    title: '3. Viruses & Malware',
    items: [
      'USB drives from students',
      'Files from WhatsApp or email',
      'Downloaded software'
    ],
    accentColor: 'red',
  },
  {
    id: 'internet',
    type: 'list',
    title: '4. Safe Internet Usage',
    items: [
      'Avoid untrusted websites',
      'Downloading unknown files',
      'Always check the Lock icon',
      'Verify https:// in address bar'
    ],
    accentColor: 'cyan',
  },
  {
    id: 'students',
    type: 'list',
    title: '5. Dealing with Students',
    items: [
      'Never share teacher or admin passwords',
      'Do not leave computers unlocked in classrooms',
      'Always log out from learning platforms',
      'Sign out of school email'
    ],
    accentColor: 'violet',
  },
  {
    id: 'devices',
    type: 'list',
    title: '6. Personal Devices at School',
    items: [
      'Do not connect personal USBs',
      'Avoid school computers for personal browsing',
      'Lock your screen when away'
    ],
    accentColor: 'orange',
  },
  {
    id: 'social-eng',
    type: 'list',
    title: '7. Social Engineering',
    subtitle: 'Be aware of human tricks.',
    items: [
      'People pretending to be IT support',
      'Fake messages from management',
      'Urgent phone calls asking for data',
      'IT will NEVER ask for your password'
    ],
    accentColor: 'slate',
  },
  {
    id: 'report',
    type: 'list',
    title: '8. What To Do If You Suspect a Problem',
    items: [
      'Immediately report strange emails',
      'Report suspicious links',
      'Note unusual computer behavior',
      'Even small doubts should be reported'
    ],
    accentColor: 'red',
  },
  {
    id: 'takeaways',
    type: 'takeaways',
    title: 'Key Takeaways',
    items: [
      'Stay alert',
      'Think before you click',
      'Never share your credentials',
      'Follow IT instructions'
    ],
    accentColor: 'green',
  },
  {
    id: 'conclusion',
    type: 'conclusion',
    title: 'Thank You',
    subtitle: 'Rawafed School security starts with YOU.',
    accentColor: 'blue',
  }
];

export const getIcon = (id: string, size = 48) => {
  switch (id) {
    case 'intro': return <School size={size} />;
    case 'objectives': return <Goal size={size} />;
    case 'importance': return <ShieldAlert size={size} />;
    case 'passwords': return <Lock size={size} />;
    case 'email': return <Mail size={size} />;
    case 'malware': return <Bug size={size} />;
    case 'internet': return <Globe size={size} />;
    case 'students': return <Users size={size} />;
    case 'devices': return <Smartphone size={size} />;
    case 'social-eng': return <UserPlus size={size} />;
    case 'report': return <AlertCircle size={size} />;
    case 'takeaways': return <CheckCircle2 size={size} />;
    default: return <ShieldAlert size={size} />;
  }
};
