import { UserCard } from "..";

// Typeof props secondary column accepts;
interface SecondaryColumnProps {
  children: React.ReactNode;
}

/**
 * SecondaryColumn component represents the secondary column in the UI layout.
 * It contains various sections such as search bar, friends, direct messages, and user card.
 */
const SecondaryColumn = ({ children }: SecondaryColumnProps) => (
  <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
    {/* Outer container for the secondary column */}
    <div className="relative flex h-full w-64 flex-col bg-dark-charcoal">
      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto mb-14">{children}</div>

      {/* Static User Card Section */}
      <UserCard />
    </div>
  </aside>
);

export default SecondaryColumn;
