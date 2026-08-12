import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons2.png';
import { Globe, AtSign, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="w-full py-section-padding-sm bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-8 max-w-container-max mx-auto">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img alt="Logo" className="h-8 w-auto grayscale brightness-0 dark:brightness-100" src={logo} />
              <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed text-2xl">Rogerex</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-gray-300 mb-6">
              Leading the digital transformation journey for enterprises globally.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-container-low dark:bg-gray-700 flex items-center justify-center hover:bg-primary/10 transition-colors" href="#">
                <Globe className="text-primary w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-low dark:bg-gray-700 flex items-center justify-center hover:bg-primary/10 transition-colors" href="#">
                <AtSign className="text-primary w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          {/* <div className="col-span-1">
            <h5 className="font-headline-md text-lg mb-6 dark:text-white">Solutions</h5>
            <ul className="flex flex-col gap-3">
              <li><Link className="text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors" to="/services">Software Dev</Link></li>
              <li><Link className="text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors" to="/services">Cloud Migrations</Link></li>
              <li><Link className="text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors" to="/services">AI Strategy</Link></li>
              <li><Link className="text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors" to="/services">Product Design</Link></li>
            </ul>
          </div> */}
          {/* Contact */}
          <div className="col-span-1">
            <h5 className="font-headline-md text-lg mb-6 dark:text-white">Contact</h5>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Mail className="text-primary w-5 h-5" />
                <a className="text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors" href="mailto:rogerexindia@gmail.com">rogerexindia@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="text-primary w-5 h-5" />
                <span className="text-on-surface-variant dark:text-gray-300">Mumbai, India</span>
              </li>
            </ul>
          </div>
          {/* Legal & Copyright */}
          <div className="col-span-1">
            <h5 className="font-headline-md text-lg mb-6 dark:text-white">Legal</h5>
            <ul className="flex flex-col gap-3 mb-8">
              <li><Link className="text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors" to="#">Privacy Policy</Link></li>
              <li><Link className="text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors" to="#">Terms of Service</Link></li>
            </ul>
            <p className="text-sm text-text-muted dark:text-gray-400">
              © 2026 Rogerex India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
