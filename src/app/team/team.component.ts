import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  template: `
    <section class="team-section">
      <header class="section-header">
        <span class="section-badge">Our Team</span>
        <h2 class="section-title">Meet Our Team</h2>
        <p class="section-description">
          We're a passionate team of developers who combine traditional coding expertise with modern development practices to deliver exceptional web solutions.
        </p>
      </header>
      <div class="team-grid">
        <article class="team-card">
          <img src="assets/icons/avatars/erik-avatar.png" alt="Erik Avatar" class="team-avatar" />
          <h3 class="team-name">ERIK</h3>
          <div class="team-role">Project Owner & DevOps</div>
          <p class="team-bio">Leads project vision and infrastructure management with expertise in cloud deployment and system architecture.</p>
          <div class="team-skills">
            <span class="skill">Project Management</span>
            <span class="skill">Docker</span>
            <span class="skill">Oracle OCI/Cloud</span>
            <span class="skill">DevOps</span>
            <span class="skill">System Design</span>
          </div>
        </article>
        <article class="team-card">
          <img src="assets/icons/avatars/romano-avatar.png" alt="Romano Avatar" class="team-avatar" />
          <h3 class="team-name">ROMANO</h3>
          <div class="team-role">Frontend Developer</div>
          <p class="team-bio">Creates stunning user interfaces with modern Angular frameworks and ensures perfect user experiences.</p>
          <div class="team-skills">
            <span class="skill">Angular</span>
            <span class="skill">TypeScript</span>
            <span class="skill">UI/UX</span>
            <span class="skill">Responsive Design</span>
            <span class="skill">Vercel deployment</span>
          </div>
        </article>
        <article class="team-card">
          <img src="assets/icons/avatars/maxel-avatar.png" alt="Maxel Avatar" class="team-avatar" />
          <h3 class="team-name">MAXEL</h3>
          <div class="team-role">Backend Developer</div>
          <p class="team-bio">Builds robust server architectures and APIs that power scalable web applications.</p>
          <div class="team-skills">
            <span class="skill">Java/Spring Boot</span>
            <span class="skill">Databases</span>
            <span class="skill">API Design</span>
            <span class="skill">Security</span>
            <span class="skill">Oracle OCI/Cloud</span>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .team-section {
      background: #f9fafb;
      padding: 80px 0;
    }
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .team-card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border-top: 4px solid #10b981;
    }
    .team-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto 1.5rem;
      object-fit: cover;
      background: #10b981;
    }
    .team-name {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    .team-role {
      color: #10b981;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .team-bio {
      color: #6b7280;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .team-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }
    .skill {
      background: #ecfdf5;
      color: #10b981;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }
  `]
})
export class TeamComponent {} 