import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdatePizzaOrderForm from './Partials/UpdatePizzaOrderForm';

export default function Edit({ auth, pizza }) {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">Order #{pizza.id}</h2>
      }>
      <Head title={`Order #${pizza.id}`} />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <UpdatePizzaOrderForm pizza={pizza} className="max-w-xl"></UpdatePizzaOrderForm>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
