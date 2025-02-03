import { Helmet } from 'react-helmet-async';

function Settings() {
  return (
    <>
      <Helmet>
        <title>Settings - GreenLink</title>
      </Helmet>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        {/* TODO: Implement settings features */}
        <p>Settings features coming soon...</p>
      </div>
    </>
  );
}

export default Settings;