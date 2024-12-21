export default function AboutHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-serif text-amber-900">
              THE AYODHYA HOTEL
            </h1>
            <p className="text-lg text-amber-800">
              <strong>THE AYODHYA HOTEL</strong> built in the birth place of
              Lord Shri Ram at Ayodhya within close proximity to Lord Shri Ram
              Temple.
            </p>
            <div className="space-y-4 text-amber-700">
              <p>
                Presenting an Upscale boutique hotel has 50+ rooms in unique
                settings with upscale facilities. The rooms are well equipped
                with guest amenities like wi-fi connectivity, 24 Hrs room
                services, hot and cold water, tea/coffee maker, a doctor on
                call, laundry services, to name a few.
              </p>
              <p>
                Our multi cuisine restaurant serves buffet breakfast, lunch and
                dinner as well as a la carte menu. We take great pride as the
                best hotel of Ayodhya in serving our guests with Vegetarian
                Menu.
              </p>
              <p>
                We offer the state of the art fully equipped business center. We
                also provide excellent conference facilities
              </p>
              <p>
                We welcome you to be a part of our family at the The Ramayana
                Hotel and look forward to welcoming you.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="The Ramayana Hotel"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
