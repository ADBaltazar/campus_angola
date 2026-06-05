import { Link } from 'react-router';
import { MapPin, Users, Star } from 'lucide-react';
import { Card } from '../design-system/Card';
import { Badge } from '../design-system/Badge';
import type { University } from '../shared/mock/universities';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function UniversityCard({ u }: { u: University }) {
  return (
    <Link to={`/universidades/${u.slug}`} className="block group">
      <Card interactive className="overflow-hidden flex flex-col h-full">
        <div className="relative h-44 overflow-hidden">
          <ImageWithFallback src={u.cover} alt={u.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ca-ink)]/70 via-[var(--ca-ink)]/10 to-transparent" />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <Badge tone={u.type === 'Pública' ? 'ink' : 'gold'}>{u.type}</Badge>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white bg-black/30 backdrop-blur px-2 h-6 rounded-full">
              <Star size={11} className="fill-[var(--ca-gold)] text-[var(--ca-gold)]" />{u.rating.toFixed(1)}
            </span>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <span className="font-display text-white font-bold text-[18px] tracking-tight leading-tight line-clamp-2">{u.short}</span>
          </div>
          <span className="absolute left-0 bottom-0 h-[3px] w-16 bg-[var(--ca-gold)]" />
        </div>
        <div className="p-5 flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-[12px] text-[var(--ca-gray-500)]">
            <span className="inline-flex items-center gap-1"><MapPin size={12} />{u.city}, {u.province}</span>
            <span className="inline-flex items-center gap-1"><Users size={12} />{u.students.toLocaleString('pt-PT')} alunos</span>
          </div>
          <p className="text-[13px] text-[var(--ca-gray-600)] leading-relaxed line-clamp-2">{u.about}</p>
          <div className="flex items-center gap-2 mt-auto pt-2 flex-wrap">
            {u.highlights.slice(0, 3).map(h => <Badge key={h} tone="gray">{h}</Badge>)}
          </div>
        </div>
      </Card>
    </Link>
  );
}
