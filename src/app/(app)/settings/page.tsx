export default function SettingsPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your farm profile and application preferences.</p>
        </div>
      </div>
      <div className="glass p-8 rounded-xl border border-border/50 text-center text-muted-foreground">
        Settings module is currently under construction. Check back soon!
      </div>
    </>
  );
}
