import CaseStudyLayout from '../components/CaseStudyLayout';

export const metadata = {
  title: 'Designing a Slack App | Adnan Khan | Product Designer',
};

export default function DesigningASlackApp() {
  return (
    <CaseStudyLayout
      title="Designing a Slack App"
      subtitle='Litmus integrated with Slack to enhance collaboration and streamline email workflows. I led the design of notifications for Proof, Analytics, and Spam Checks, making it easy for teams to stay updated without leaving their existing workspaces.'
      tags={['Design Lead', 'Design Strategy & Vision', '2018']}
      variant="v2"
    >
      <div className="image-full">
        <img src="/images/slack/slack-integration-cover.png" alt="Litmus Slack App integration overview" />
      </div>

      <h3>Overview</h3>

      <p>The Litmus Slack App was a part of the business&apos;s first few initiatives on their &quot;work where you work&quot; mantra. With the ever growing and complex nature of workflows for deploying emails, the goal behind this mantra was to allow Litmus to integrate within current workflows of its users, including users of Slack. Other executions on this mantra included the Litmus Extension.</p>

      <p>This was an opportunity for Litmus to position itself as a collaborative platform where teams worked together to achieve goals instead of just a specialized tool for email developers. The Slack App would provide timely notifications of Litmus activity to teams using Slack, including weekly reports, incident alerts and comments.</p>

      <h3>Goals</h3>

      <ul className="bulletedList">
        <li>Streamline email production of email developers, copy writers and stakeholders and help them become more productive in their email deployment workflows.</li>
        <li>Increase visibility and provide continuous value from Litmus in the form of integrated reports from Analytics and Spam Testing.</li>
        <li>Add more users to the Litmus platform by improved methods of collaboration within Litmus and outside of the Litmus platform.</li>
      </ul>

      <h3>Proof Notifications</h3>

      <p>Proof is Litmus&apos;s collaboration tool for email developers, once an email is ready for review developers may move it into Proof to get inline and concise feedback from stakeholders. Each time an email is ready for review or a comment has been made, stakeholders are notified within Slack.</p>

      <div className="image-full">
        <img src="/images/slack/proof-notifications.png" alt="Proof review notifications in Slack" />
      </div>

      <h3>Analytics Notifications</h3>

      <p>A monthly or weekly recurring report for your email campaigns sent automatically to a Slack channel of choice. A quick and easy way to deliver value to the leadership team without having them combing through pages and pages in Litmus.</p>

      <div className="image-full">
        <img src="/images/slack/analytics-notifications.png" alt="Analytics report notifications in Slack" />
      </div>

      <h3>Spam Notifications</h3>

      <p>Deliver up-to-date spam testing notifications to an individual or Slack channel of choice so an email never misses getting into the Inbox.</p>

      <div className="image-full">
        <img src="/images/slack/spam-notifications.png" alt="Spam testing notifications in Slack" />
      </div>

      <h3>Threaded Responses</h3>

      <p>Taking advantage of Slack Threads to design ways of collaborating with users within the Litmus app without having to leave a context. Users may quickly respond within Slack and have their responses fed back into Litmus. This helps reviewers context switch less, and allows email developers to receive feedback much faster.</p>

      <div className="image-full">
        <img src="/images/slack/threaded-notifications.png" alt="Threaded responses for inline collaboration" />
      </div>

      <h3>Learnings</h3>

      <p>The MVP release of the application only included Proof notifications, Litmus&apos;s collaboration tool for iterating on email copy and design with other stakeholders. This was an enterprise offering, and had no offering for lower tier plans.</p>

      <ul className="bulletedList">
        <li>The Proof notifications in Slack were a delight to users because this meant they could quickly respond to various comments without switching context, and revision cycles moving quickly.</li>
        <li>Initial adoption was slow, despite marketing efforts around the app. This was mostly attributed to limited discovery of the Slack App within the core application.</li>
        <li>Integrations were sprinkled in different areas of the app without a single unified space which caused a lot of confusion by the users.</li>
        <li>There was no flavour of the Slack App offered to lower tier plan users, that significantly reduced reach.</li>
      </ul>

      <h3>Links</h3>

      <ul className="bulletedList">
        <li><a target="_blank" rel="noopener noreferrer" href="https://litmusapp.slack.com/apps/ADY9V04TF-litmus">View the Litmus Slack App on the Slack directory &rarr;</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://litmus.com/integrations/slack">Visit the Slack integration on the Litmus website &rarr;</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://litmus.com/blog/new-litmus-automatic-notifications-slack">Read the announcement blog post &rarr;</a></li>
      </ul>
    </CaseStudyLayout>
  );
}
