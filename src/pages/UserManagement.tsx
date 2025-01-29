import { Helmet } from 'react-helmet-async';

function UserManagement() {
  return (
    <>
      <Helmet>
        <title>User Management | GreenLink</title>
      </Helmet>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">User Management</h1>
        {/* TODO: Implement user management features */}
        <p>User management features coming soon...</p>
      </div>
    </>
  );
}

export default UserManagement;