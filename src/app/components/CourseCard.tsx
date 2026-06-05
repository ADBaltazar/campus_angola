import { Link } from 'react-router';
import { Clock, Users, ArrowUpRight } from 'lucide-react';
import { Card } from '../design-system/Card';
import { Badge } from '../design-system/Badge';
import type { Course } from '../shared/mock/courses';

export function CourseCard({ c }: { c: Course }) {
  return (
    <Link to={`/cursos/${c.slug}`} className="block group">
      <Card interactive className="p-5 flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between gap-3">
          <Badge tone="red" dot>{c.area}</Badge>
          <ArrowUpRight size={18} className="text-[var(--ca-gray-400)] group-hover:text-[var(--ca-primary)] transition-colors -mt-1" />
        </div>
        <div>
          <h3 className="font-display text-[18px] font-semibold tracking-tight text-[var(--ca-ink)] leading-snug">{c.name}</h3>
          <p className="mt-1.5 text-[13px] text-[var(--ca-gray-500)] line-clamp-2">{c.about}</p>
        </div>
        <div className="flex items-center gap-4 text-[12px] text-[var(--ca-gray-600)] mt-auto">
          <span className="inline-flex items-center gap-1.5"><Clock size={13} />{c.duration}</span>
          <span className="inline-flex items-center gap-1.5"><Users size={13} />{c.universityIds.length} universidades</span>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-[var(--ca-gray-200)]">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--ca-gray-500)]">{c.modality}</span>
          <span className="text-[12px] font-medium text-[var(--ca-ink)]">{c.vacancies} vagas</span>
        </div>
      </Card>
    </Link>
  );
}
