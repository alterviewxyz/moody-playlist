import React from 'react';
import { PageProps } from 'gatsby';
import { MainLayout } from '@/layouts';

const Home: React.FC<PageProps> = () => (
  <MainLayout>
    <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
  </MainLayout>
);

export default Home;
