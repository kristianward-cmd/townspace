
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const HowItWorksPage = lazy(() => import('../pages/how-it-works/page'));
const PricingPage = lazy(() => import('../pages/pricing/page'));
const CheckoutPage = lazy(() => import('../pages/checkout/page'));
const SignUpPage = lazy(() => import('../pages/signup/page'));
const IndustriesPage = lazy(() => import('../pages/industries/page'));
const SamplesPage = lazy(() => import('../pages/samples/page'));
const ReviewsPage = lazy(() => import('../pages/reviews/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogPost = lazy(() => import('../pages/blog/components/BlogPost'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/how-it-works',
    element: <HowItWorksPage />,
  },
  {
    path: '/pricing',
    element: <PricingPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/industries',
    element: <IndustriesPage />,
  },
  {
    path: '/samples',
    element: <SamplesPage />,
  },
  {
    path: '/reviews',
    element: <ReviewsPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPost />,
  },
  {
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
