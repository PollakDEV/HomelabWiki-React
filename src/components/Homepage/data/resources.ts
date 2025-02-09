export interface Resource {
    id: number;
    icon: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
  }
  
  export const resources: Resource[] = [
    {
      id: 1,
      icon: '📦',
      title: 'Proxmox VE',
      description: 'Virtualization platform for enterprise-grade home labs',
      tags: ['Virtualization', 'Hypervisor', 'Bare-metal'],
      link: '/apps/proxmox'
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Network Security',
      description: 'Essential security practices for your homelab environment',
      tags: ['Security', 'Networking', 'Firewall'],
      link: '/docs/security'
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Nextcloud Setup Guide',
      description: 'Complete walkthrough for deploying your private cloud storage solution',
      tags: ['Storage', 'Beginner', 'Docker'],
      link: '/docs/nextcloud'
    }
  ];