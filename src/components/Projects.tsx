'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Users,
  Target,
  Award,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  category:
    | 'Frontend Development'
    | 'DevOps & Infrastructure'
    | 'Design System'
    | 'Performance Optimization';
  period: string;
  impact: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  details: {
    overview: string;
    features: string[];
    challenges: string[];
    solutions: string[];
    duration: string;
    teamSize: string;
    role: string;
    results: string[];
  };
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 'toodee-ui-renewal',
      title: '오늘의 배송 Toodee',
      subtitle: '배송접수 UI 개선',
      description:
        '레거시 배송접수 페이지를 현대적인 기술 스택으로 개선하여 퍼포먼스 30% 향상과 코드 양 18% 감소를 달성',
      image: '/placeholder.svg?height=300&width=400&text=Toodee+UI+Renewal',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'React Hook Form',
        'Zod',
        'React Query',
        'Vitest',
        'MSW',
      ],
      category: 'Frontend Development',
      period: '2024.10 - 2025.01',
      impact: ['퍼포먼스 30% 향상', '코드 양 18% 감소', '테스트 커버리지 100%'],
      liveUrl: 'https://toodee.co.kr',
      featured: true,
      details: {
        overview:
          '레거시 배송접수 페이지를 현대적인 기술 스택으로 개선하여 사용자 경험과 개발자 경험을 모두 향상시킨 프로젝트입니다.',
        features: [
          'React Hook Form과 Zod를 활용한 폼 검증 시스템',
          'React Query를 통한 효율적인 서버 상태 관리',
          'Vitest와 React Testing Library를 활용한 테스트 환경 구축',
          'MSW 2.x를 활용한 일관성 있는 모킹 환경',
          'Web Vitals 지표 개선을 통한 성능 최적화', 
        ],
        challenges: [
          '레거시 코드의 복잡한 구조와 기술 부채',
          '기존 기능을 유지하면서 새로운 기술 스택 도입',
          '성능 최적화와 코드 품질 개선의 균형',
        ],
        solutions: [
          'React Hook Form과 Zod 도입으로 폼 관리 로직 간소화',
          'React Query를 통한 서버 상태 관리 최적화',
          '포괄적인 테스트 환경 구축으로 안정성 보장',
        ],
        duration: '4개월',
        teamSize: '프론트엔드 파트장 (팀 리드)',
        role: '프론트엔드 개발 리드',
        results: [
          '코드 양 18% 감소로 유지보수성 향상',
          '퍼포먼스 30% 향상으로 사용자 경험 개선',
          '핵심 로직 테스트 커버리지 100% 달성',
          'LCP 48% 감소, FCP 60% 감소',
        ],
      },
    },
    {
      id: 'o2pluss-design-system',
      title: 'O2pluss Design System',
      subtitle: '범용 UI 라이브러리',
      description:
        '회사 내 모든 프로젝트에서 사용되는 디자인 시스템을 구축하여 UI 작업공수 평균 70% 감소 달성',
      image: '/placeholder.svg?height=300&width=400&text=Design+System',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Storybook',
        'GitHub Actions',
        'Chromatic',
        'Rollup',
      ],
      category: 'Design System',
      period: '2024.02 - 2024.08',
      impact: [
        'UI 작업공수 70% 감소',
        '문서화 시간 80% 단축',
        '전사 UI 일관성 확보',
      ],
      githubUrl: 'https://github.com/o2pluss',
      featured: true,
      details: {
        overview:
          '회사 내 모든 프로젝트에서 일관된 UI/UX를 제공하고 개발 효율성을 높이기 위한 디자인 시스템 라이브러리입니다.',
        features: [
          '재사용 가능하고 커스터마이징 가능한 컴포넌트 라이브러리',
          'Vite를 활용한 다양한 환경(SSR, CJS, ESM) 지원',
          'Storybook을 통한 컴포넌트 문서화 및 예제 제공',
          'GitHub Actions를 활용한 자동 배포 파이프라인',
          'AI를 활용한 문서화 자동화',
        ],
        challenges: [
          '다양한 프로젝트 환경에서 호환되는 라이브러리 구축',
          '일관된 디자인 시스템 구축과 유지보수',
          '효율적인 문서화 및 배포 자동화',
        ],
        solutions: [
          'Vite를 활용한 모듈 번들링으로 다양한 환경 지원',
          'Storybook과 AI를 활용한 자동화된 문서화 시스템',
          'GitHub Actions와 GitHub Packages를 통한 CI/CD 구축',
        ],
        duration: '6개월',
        teamSize: '단독 개발',
        role: '디자인 시스템 아키텍트 & 개발자',
        results: [
          'UI 작업공수 평균 30-50% 감소',
          '문서화 관련 작업시간 80% 감소',
          '전사 프로젝트 UI 일관성 확보',
          '개발팀 생산성 대폭 향상',
        ],
      },
    },
    {
      id: 'toodee-devops',
      title: 'Toodee 배포환경 개선',
      subtitle: 'CI/CD 최적화',
      description:
        'Docker 기반 배포 환경으로 전환하여 배포시간을 5분에서 1.5분으로 70% 단축하고 Node 호환성 이슈 해결',
      image: '/placeholder.svg?height=300&width=400&text=DevOps+Optimization',
      technologies: [
        'Docker',
        'Nginx',
        'PM2',
        'Next.js',
        'GitHub Actions',
        'Node.js',
      ],
      category: 'DevOps & Infrastructure',
      period: '2024.06 - 2024.07',
      impact: [
        '배포시간 70% 단축',
        'Node 호환성 이슈 해결',
        '배포 안정성 향상',
      ],
      featured: true,
      details: {
        overview:
          '기존의 비효율적인 배포 프로세스를 Docker 기반의 현대적인 배포 환경으로 개선한 인프라 최적화 프로젝트입니다.',
        features: [
          'Docker 이미지 기반 배포 방식으로 전환',
          'Nginx와 PM2 빌드 커맨드 최적화',
          'Next.js standalone 배포 방식 적용',
          'Node 버전 호환성 이슈 해결',
        ],
        challenges: [
          'Node 버전 호환성으로 인한 배포 실패',
          '긴 배포 시간으로 인한 개발 효율성 저하',
          '배포 용량 최적화 필요',
        ],
        solutions: [
          'Docker 이미지 배포 방식으로 Node 호환성 이슈 해결',
          'Nginx와 PM2 설정 최적화로 빌드 시간 단축',
          'Next.js standalone 모드 적용으로 배포 용량 감소',
        ],
        duration: '2개월',
        teamSize: 'DevOps 담당',
        role: 'DevOps 엔지니어 & 프론트엔드 개발자',
        results: [
          '배포시간 5분 → 1.5분으로 70% 단축',
          'Node 호환성 이슈 완전 해결',
          '배포 용량 대폭 감소',
          '배포 안정성 및 신뢰성 향상',
        ],
      },
    },
    {
      id: 'coconuts-renewal',
      title: 'Coconuts 컨설팅',
      subtitle: '레거시 시스템 리뉴얼',
      description:
        'Vue.js 기반 레거시 서비스를 React로 점진적 마이그레이션하며 UI/UX 개선 및 아키텍처 현대화 진행',
      image: '/placeholder.svg?height=300&width=400&text=Coconuts+Renewal',
      technologies: [
        'React',
        'Vue.js',
        'TypeScript',
        'Webpack',
        'Module Federation',
        'Pinia',
        'Mermaid',
      ],
      category: 'Frontend Development',
      period: '2024.03 - 2024.12',
      impact: [
        'Vue → React 마이그레이션',
        'TypeScript 도입',
        '데이터 구조 가독성 개선',
      ],
      details: {
        overview:
          'Vue.js 기반의 레거시 컨설팅 서비스를 React 기반으로 점진적으로 전환하면서 UI/UX 개선과 아키텍처 현대화를 진행한 대규모 리뉴얼 프로젝트입니다.',
        features: [
          'Webpack Module Federation을 활용한 점진적 마이그레이션',
          'Vue에서 React로의 기술 스택 전환',
          'TypeScript 마이그레이션으로 타입 안정성 확보',
          'Mermaid를 활용한 인터페이스 시각화',
        ],
        challenges: [
          'Vue.js에서 React로의 점진적 마이그레이션',
          '레거시 JavaScript 코드의 TypeScript 전환',
          '복잡한 데이터 구조의 가독성 개선',
        ],
        solutions: [
          'Module Federation을 활용한 단계적 마이그레이션 전략',
          'TypeScript 점진적 도입으로 안정성 확보',
          'Mermaid 다이어그램으로 데이터 구조 시각화',
        ],
        duration: '9개월',
        teamSize: '프론트엔드 파트장',
        role: '프론트엔드 아키텍트 & 개발 리드',
        results: [
          'Vue에서 React로 성공적인 기술 스택 전환',
          'TypeScript 도입으로 코드 안정성 향상',
          '데이터 구조 가독성 대폭 개선',
          '유지보수성과 확장성 확보',
        ],
      },
    },
    {
      id: 'vloc-console',
      title: 'VLOC Console',
      subtitle: 'B2C 모니터링 서비스',
      description:
        'SDK 사용량 모니터링과 결제 시스템을 제공하는 B2C 콘솔 서비스로 API 호출수 17% 감소 및 빌드시간 40% 단축',
      image: '/placeholder.svg?height=300&width=400&text=VLOC+Console',
      technologies: [
        'React',
        'Next.js',
        'React Query',
        'TypeScript',
        'Docker',
        'Jest',
        'Testing Library',
      ],
      category: 'Performance Optimization',
      period: '2022.10 - 2023.03',
      impact: [
        'API 호출수 17% 감소',
        '빌드시간 40% 단축',
        'Web Vitals 70→90점',
      ],
      details: {
        overview:
          'SDK 사용량 모니터링과 결제 시스템을 제공하는 B2C 콘솔 서비스입니다. 성능 최적화와 개발 효율성에 중점을 두어 개발했습니다.',
        features: [
          'React Query를 활용한 API 캐싱 시스템',
          'ISR을 적용한 서버 사이드 캐싱',
          'Docker 멀티 스테이지 빌드 최적화',
          '번들 최적화를 통한 Web Vitals 개선',
        ],
        challenges: [
          '대량의 API 호출로 인한 성능 이슈',
          '빌드 시간과 배포 용량 최적화',
          'Web Vitals 성능 지표 개선',
        ],
        solutions: [
          'React Query 도입으로 클라이언트 캐싱 최적화',
          'ISR 적용으로 서버 사이드 캐싱 구현',
          'Docker 최적화로 빌드 및 배포 효율성 향상',
        ],
        duration: '6개월',
        teamSize: '프론트엔드 개발자',
        role: '프론트엔드 개발자',
        results: [
          'API 호출횟수 17% 감소',
          '공통 API 호출수 1/10 감소',
          '빌드시간 40% 감소, 배포 소요시간 60% 감소',
          'Web Vitals 성능 지표 70→90점 이상 달성',
        ],
      },
    },
    {
      id: 'editor-2.0',
      title: 'Editor 2.0',
      subtitle: '레거시 에디터 리뉴얼',
      description:
        '레거시 에디터를 현대적인 기술 스택으로 완전 리뉴얼하여 로드시간 64% 단축 및 테스트 커버리지 50% 확보',
      image: '/placeholder.svg?height=300&width=400&text=Editor+2.0',
      technologies: [
        'React',
        'Redux Toolkit',
        'TypeScript',
        'Webpack',
        'ESBuild',
        'Jest',
        'Storybook',
      ],
      category: 'Performance Optimization',
      period: '2021.06 - 2021.12',
      impact: [
        '로드시간 64% 단축',
        '테스트 커버리지 50%',
        'Redux 코드 복잡성 감소',
      ],
      details: {
        overview:
          '레거시 에디터를 현대적인 기술 스택으로 완전히 리뉴얼한 프로젝트입니다. 성능 최적화와 개발자 경험 개선에 중점을 두었습니다.',
        features: [
          'Redux Toolkit을 활용한 상태 관리 현대화',
          'Webpack 기반 프로젝트 스캐폴딩',
          'ESBuild-loader를 통한 빌드 최적화',
          'Jest와 React Testing Library 테스트 환경',
        ],
        challenges: [
          '레거시 Redux 코드의 복잡성',
          '긴 로드 시간으로 인한 사용자 경험 저하',
          '테스트 환경 부재로 인한 품질 관리 어려움',
        ],
        solutions: [
          'Redux Toolkit 도입으로 상태 관리 로직 간소화',
          'ESBuild-loader 적용으로 빌드 성능 대폭 개선',
          'Jest와 Testing Library로 포괄적인 테스트 환경 구축',
        ],
        duration: '6개월',
        teamSize: '프론트엔드 개발자',
        role: '프론트엔드 개발자',
        results: [
          '로드시간 5.5초 → 2초로 64% 단축',
          '테스트 커버리지 50% 확보',
          'Redux 코드 복잡성 대폭 감소',
          '개발자 경험 및 유지보수성 향상',
        ],
      },
    },
  ];

  const categories = [
    'All',
    'Frontend Development',
    'DevOps & Infrastructure',
    'Design System',
    'Performance Optimization',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return '💻';
      case 'DevOps & Infrastructure':
        return '🚀';
      case 'Design System':
        return '🎨';
      case 'Performance Optimization':
        return '⚡';
      default:
        return '📁';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend Development':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'DevOps & Infrastructure':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Design System':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Performance Optimization':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              주요 프로젝트
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              3년간의 프론트엔드 개발 경험을 통해 다양한 도메인에서 성과를
              창출한 주요 프로젝트들입니다.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Projects */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Award className="h-6 w-6 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                주요 성과 프로젝트
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 border-yellow-200"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-yellow-500 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        className={`${getCategoryColor(project.category)} border`}
                      >
                        {getCategoryIcon(project.category)} {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {project.subtitle}
                    </CardDescription>
                    <p className="text-gray-700 text-sm">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-gray-700">
                          주요 성과
                        </span>
                      </div>
                      <div className="space-y-1">
                        {project.impact
                          .slice(0, 2)
                          .map((impact, impactIndex) => (
                            <div
                              key={impactIndex}
                              className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded"
                            >
                              • {impact}
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      자세히 보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'All'
                    ? '전체'
                    : `${getCategoryIcon(category)} ${category}`}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All Projects */}
        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? 'animate' : ''}`}
        >
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    className={`${getCategoryColor(project.category)} border text-xs`}
                  >
                    {getCategoryIcon(project.category)} {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-yellow-500 text-white text-xs">
                      <Award className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {project.subtitle}
                </CardDescription>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  {project.period}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">
                      주요 성과
                    </span>
                  </div>
                  <div className="space-y-1">
                    {project.impact.slice(0, 2).map((impact, impactIndex) => (
                      <div
                        key={impactIndex}
                        className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded"
                      >
                        • {impact}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    프로젝트 자세히 알아보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {selectedProject && (
                <Badge
                  className={`${getCategoryColor(selectedProject.category)} border`}
                >
                  {getCategoryIcon(selectedProject.category)}{' '}
                  {selectedProject.category}
                </Badge>
              )}
              {selectedProject?.featured && (
                <Badge className="bg-yellow-500 text-white">
                  <Award className="h-3 w-3 mr-1" />
                  Featured Project
                </Badge>
              )}
            </div>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
            <p className="text-lg text-gray-600">{selectedProject?.subtitle}</p>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image || '/placeholder.svg'}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold mb-3">프로젝트 개요</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">기간</p>
                    <p className="font-medium">
                      {selectedProject.details.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">팀 구성</p>
                    <p className="font-medium">
                      {selectedProject.details.teamSize}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">역할</p>
                    <p className="font-medium">
                      {selectedProject.details.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Impact */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  주요 성과
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.impact.map((impact, index) => (
                    <div
                      key={index}
                      className="p-3 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <p className="text-green-800 font-medium">{impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">주요 기능</h3>
                <ul className="space-y-2">
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">주요 도전과제</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.challenges.map(
                      (challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">해결 방안</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.solutions.map(
                      (solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>

              {/* Detailed Results */}
              <div>
                <h3 className="text-lg font-semibold mb-3">상세 성과</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.details.results.map((result, index) => (
                    <div
                      key={index}
                      className="p-3 bg-blue-50 border border-blue-200 rounded-lg"
                    >
                      <p className="text-blue-800 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                <div className="flex gap-4 pt-4 border-t">
                  {selectedProject.liveUrl && (
                    <Button asChild variant="outline">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        라이브 사이트
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button asChild variant="outline">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
