import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/staking", label: "Staking" },
  { to: "/reputation", label: "Reputation" },
  { to: "/audit-log", label: "Audit Log" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#161b22] px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-semibold text-[#7f5af0]">TrustChain</h1>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`text-sm font-medium ${
                location.pathname === link.to
                  ? 'text-[#2cb67d] underline'
                  : 'text-white hover:text-[#7f5af0]'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
