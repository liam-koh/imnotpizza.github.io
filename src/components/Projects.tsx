'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
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
          'Vue.js에서 React로의 점진��� 마이그레이션',
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
      id: 'larla-project',
      title: 'Larla',
      subtitle: '소셜 커머스 플랫폼',
      description:
        '소셜 미디어와 커머스를 결합한 혁신적인 플랫폼으로 사용자 참여도 40% 증가 및 전환율 25% 향상 달성',
      image: '/placeholder.svg?height=300&width=400&text=Larla+Platform',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Redux Toolkit',
        'Styled Components',
        'Socket.io',
        'PWA',
      ],
      category: 'Frontend Development',
      period: '2023.05 - 2023.11',
      impact: [
        '사용자 참여도 40% 증가',
        '전환율 25% 향상',
        'PWA 도입으로 모바일 UX 개선',
      ],
      details: {
        overview:
          '소셜 미디어의 상호작용성과 전자상거래의 편의성을 결합한 혁신적인 소셜 커머스 플랫폼입니다.',
        features: [
          '실시간 소셜 피드와 상품 추천 시스템',
          'Socket.io를 활용한 실시간 채팅 및 알림',
          'PWA 기술로 네이티브 앱 수준의 사용자 경험',
          'Redux Toolkit을 통한 복잡한 상태 관리',
        ],
        challenges: [
          '실시간 데이터 동기화와 성능 최적화',
          '복잡한 사용자 인터랙션 관리',
          '모바일 우선 반응형 디자인 구현',
        ],
        solutions: [
          'Socket.io와 Redux를 연동한 실시간 상태 관리',
          'PWA 기술 도입으로 모바일 사용성 극대화',
          'Styled Components로 일관된 디자인 시스템 구축',
        ],
        duration: '6개월',
        teamSize: '풀스택 개발자',
        role: '프론트엔드 리드 개발자',
        results: [
          '사용자 참여도 40% 증가',
          '구매 전환율 25% 향상',
          '모바일 사용자 만족도 90% 이상',
          'PWA 설치율 30% 달성',
        ],
      },
    },
  ];

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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              주요 프로젝트
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div ref={projectsRef} className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 150}
            >
              <Card className="flex flex-col lg:flex-row w-full lg:h-[40rem] overflow-hidden shadow-lg">
                {/* 이미지 섹션 */}
                <div className="lg:w-2/5 aspect-video lg:aspect-auto bg-gray-200 overflow-hidden">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 콘텐츠 섹션 */}
                <div className="lg:w-3/5 flex flex-col">
                  <CardHeader>
                    {/* Frontend Development 카테고리가 아닌 경우에만 표시 */}
                    {project.category !== 'Frontend Development' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={`${getCategoryColor(project.category)} border text-xs`}
                        >
                          {getCategoryIcon(project.category)} {project.category}
                        </Badge>
                      </div>
                    )}
                    <CardTitle className="text-2xl lg:text-3xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base lg:text-lg text-gray-500">
                      {project.subtitle}
                    </CardDescription>
                    <p className="text-gray-700 text-base lg:text-lg">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 space-y-4">
                    <div className="flex items-center gap-2 text-base lg:text-lg text-gray-600">
                      <Calendar className="h-5 w-5" />
                      {project.period}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="text-base lg:text-lg font-medium text-gray-700">
                          주요 성과
                        </span>
                      </div>
                      <div className="space-y-1">
                        {project.impact
                          .slice(0, 2)
                          .map((impact, impactIndex) => (
                            <div
                              key={impactIndex}
                              className="text-base lg:text-lg text-green-700 bg-green-50 px-3 py-2 rounded"
                            >
                              • {impact}
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 bg-blue-100 text-blue-800 text-sm lg:text-base rounded-full hover:bg-blue-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-2 bg-gray-100 text-gray-600 text-sm lg:text-base rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
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
