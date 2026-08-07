import fs from 'fs';
import path from 'path';

const dirs = [
  path.join(process.cwd(), 'src', 'pages'),
  path.join(process.cwd(), 'src', 'components')
];

// Mapping material-symbols-outlined to lucide-react
const iconMap = {
  'menu': 'Menu',
  'public': 'Globe',
  'alternate_email': 'AtSign',
  'mail': 'Mail',
  'location_on': 'MapPin',
  'send': 'Send',
  'expand_more': 'ChevronDown',
  'lightbulb': 'Lightbulb',
  'verified': 'BadgeCheck',
  'visibility': 'Eye',
  'groups': 'Users',
  'gavel': 'Gavel',
  'school': 'GraduationCap',
  'code': 'Code',
  'cloud': 'Cloud',
  'precision_manufacturing': 'Factory',
  'analytics': 'LineChart',
  'terminal': 'Terminal',
  'design_services': 'PenTool',
  'integration_instructions': 'Puzzle',
  'security': 'ShieldCheck',
  'rocket_launch': 'Rocket',
  'share': 'Share2',
  'group': 'Users',
  'check_circle': 'CheckCircle2',
  'arrow_forward': 'ArrowRight',
  'open_in_new': 'ExternalLink'
};

const defaultImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800';

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace icons
    const iconsToImport = new Set();
    content = content.replace(/<span[^>]*material-symbols-outlined[^>]*>([^<]+)<\/span>/g, (match, iconName) => {
      const cleanName = iconName.trim();
      const lucideIcon = iconMap[cleanName] || 'Circle'; // fallback
      iconsToImport.add(lucideIcon);
      return `<${lucideIcon} className="w-6 h-6 text-current" />`;
    });

    // Replace images (if src is empty or contains googleusercontent)
    content = content.replace(/<img([^>]*)src="([^"]*)"([^>]*)>/g, (match, before, src, after) => {
      if (!src || src.includes('googleusercontent.com') || src === '#') {
        // preserve logo if it's imported
        if (src.includes('logo')) return match;
        return `<img${before}src="${defaultImage}"${after}>`;
      }
      return match;
    });

    // Insert imports if needed
    if (iconsToImport.size > 0) {
      const imports = Array.from(iconsToImport).join(', ');
      if (content.includes('lucide-react')) {
         // It might be tricky to merge, let's just add a new import
         content = content.replace(/(import React[^;]*;)/, `$1\nimport { ${imports} } from 'lucide-react';`);
      } else {
         content = content.replace(/(import React[^;]*;)/, `$1\nimport { ${imports} } from 'lucide-react';`);
      }
    }

    fs.writeFileSync(filePath, content);
    console.log(`Refactored ${file}`);
  });
});
