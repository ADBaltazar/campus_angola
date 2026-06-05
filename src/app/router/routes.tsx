import { Routes, Route, Navigate } from 'react-router';
import { PublicLayout } from '../layouts/PublicLayout';
import { StudentLayout } from '../layouts/StudentLayout';
import { AdminLayout } from '../layouts/AdminLayout';

import { Landing } from '../features/public/Landing';
import { UniversitiesList } from '../features/public/UniversitiesList';
import { UniversityDetail } from '../features/public/UniversityDetail';
import { CoursesList } from '../features/public/CoursesList';
import { CourseDetail } from '../features/public/CourseDetail';
import { Application } from '../features/public/Application';
import { Adesao } from '../features/public/Adesao';

import { StudentDashboard } from '../features/student/Dashboard';
import { StudentNotas } from '../features/student/Notas';
import { StudentHorario } from '../features/student/Horario';
import { StudentDisciplinas } from '../features/student/Disciplinas';
import { StudentHistorico, StudentDocumentos, StudentPerfil } from '../features/student/SimplePages';

import { AdminDashboard } from '../features/admin/Dashboard';
import { AdminAlunos } from '../features/admin/Alunos';
import { AdminCandidaturas } from '../features/admin/Candidaturas';
import { AdminCursos, AdminAnalytics } from '../features/admin/SimplePages';
import { Login } from '../features/auth/Login';
import { Register } from '../features/auth/Register';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="universidades" element={<UniversitiesList />} />
        <Route path="universidades/:slug" element={<UniversityDetail />} />
        <Route path="cursos" element={<CoursesList />} />
        <Route path="cursos/:slug" element={<CourseDetail />} />
        <Route path="candidatura" element={<Application />} />
        <Route path="adesao" element={<Adesao />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="registar" element={<Register />} />

      <Route path="aluno" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="notas" element={<StudentNotas />} />
        <Route path="horario" element={<StudentHorario />} />
        <Route path="disciplinas" element={<StudentDisciplinas />} />
        <Route path="historico" element={<StudentHistorico />} />
        <Route path="documentos" element={<StudentDocumentos />} />
        <Route path="perfil" element={<StudentPerfil />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="alunos" element={<AdminAlunos />} />
        <Route path="cursos" element={<AdminCursos />} />
        <Route path="candidaturas" element={<AdminCandidaturas />} />
        <Route path="analytics" element={<AdminAnalytics />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
