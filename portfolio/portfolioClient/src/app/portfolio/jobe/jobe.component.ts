import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'jobe-comp',
  imports: [NgFor],
  templateUrl: './jobe.component.html',
  styleUrls: ['./jobe.component.css']
})
export class JobeComponent {  
  job1 = {
    date: "Июль 2022 — Май 2023",
    company: "ФГАОУ КФУ им. Вернадского",
    linkCompany: "https://cfuv.ru",
    post: "Разработчик ПО",
    frontDuties: "Разработка сайтов по макету из figma + по тз. Доработка на половину готовых сайтов (Дополнение новыми компонентами админки сайта, изменение верстки по новому дизайну). Разработка тем под WordPress.",
    backDuties: "Разработка новых контроллеров и модификация существующих. Написание новых моделей. Развертывание сайтов на WordPress.",
    stackTech: ["Html", "Css", "Bootstrap", "JS", "RazorPage", "C#", "Asp.Net Core"]
  };
  job2 = {
    date: "Сентябрь 2023 — Декабрь 2023",
    company: "Web студия 51",
    linkCompany: "https://web-studio-51.com",
    post: "Web разработчик",
    frontDuties: "Выполнял ребрендиг сайта у другой студии по новому дизайну. Разрабатывал сайт по дизайну из figma.",
    backDuties: "Разворачивал сайты на October CMS",
    stackTech: ["Html", "Css", "TailWind", "JS", "Twig", "PHP", "October CMS"]
  };
  Jobs = [this.job1, this.job2];
}
