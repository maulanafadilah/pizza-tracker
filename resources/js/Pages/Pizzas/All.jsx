import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table';

const columns = ['size', 'chef', 'status'];

export default function All({ auth, pizzas }) {
  return (
    <Authenticated
      user={auth.user}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">All Pizzas</h2>}>
      <Head title="Pizzas" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <Table items={pizzas} columns={columns} primary="Order Number" action="pizzas.edit" />
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
