<template>
  <div class="w-full my-24 mx-auto">
    <div class="cta-section mb-32 lg:text-left md:px-60">
      <div
        class="w-full h-full flex items-center justify-center px-6 py-12 md:px-12"
      >
        <div class="grid gap-12 lg:grid-cols-2">
          <div class="mt-12 lg:mt-0 text-neutral-100">
            <h1 class="mb-12 text-5xl font-bold leading-tight tracking-tight">
              Interested? Make an enquiry.
            </h1>
            <p class="text-neutral-300 dark:text-neutral-200">
              For more information or to request that a member of our sales team
              contact you, please fill out the form.
            </p>
            <p>
              T: <span><a href="tel:+4733378901">+84 0123456789</a></span>
            </p>
            <p>
              E:
              <span
                ><a href="mailto:someone@example.com">test@gmail.com</a></span
              >
            </p>
          </div>
          <div class="mb-12 lg:mb-0">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Title*
                  </label>
                  <div class="relative">
                    <select
                      class="form-select block appearance-none w-full bg-transparent border-none leading-tight py-3 focus:outline-none"
                      id="grid-state"
                      v-model="formData.title"
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                      <option>Prof.</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name*
                  </label>
                  <input
                    v-model="formData.firstName"
                    @focus="onFocus('firstName')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 mb-3 leading-tight focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p
                    v-if="initFocusState.firstName"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validatefirstName }}
                  </p>
                </div>
                <div class="w-full md:w-2/5 px-3">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name*
                  </label>
                  <input
                    v-model="formData.lastName"
                    @focus="onFocus('lastName')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 mb-3 leading-tight focus:outline-none"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                  <p
                    v-if="initFocusState.lastName"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validatelastName }}
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Phone number*
                  </label>
                  <input
                    v-model="formData.phone"
                    @focus="onFocus('phone')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 mb-3 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                  <p
                    v-if="initFocusState.phone"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validateNumber }}
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Email*
                  </label>
                  <input
                    v-model="formData.email"
                    name="email"
                    @focus="onFocus('email')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 mb-3 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="John@gmail.com"
                  />
                  <p
                    v-if="initFocusState.email"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validateEmail }}
                  </p>
                </div>
                <div class="w-full px-3 mb-6 md:mb-6">
                  <label
                    class="form-label block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Enquiry*
                  </label>
                  <textarea
                    v-model="formData.inquiry"
                    @focus="onFocus('inquiry')"
                    class="form-input appearance-none block w-full bg-transparent border-none py-3 leading-tight focus:outline-none"
                    id="grid-city"
                    type="text"
                    placeholder="Compose enquiry here"
                  />
                  <p
                    v-if="initFocusState.validateEmail"
                    class="text-red-500 text-xs italic"
                  >
                    {{ validateInquiry }}
                  </p>
                </div>
              </div>
              <p class="form-info mb-3">
                This information that you have provided will only be used for
                this particular communication and will not be used for any other
                purpose.
              </p>
            </form>
            <button @click="submitForm" class="form-button p-10">
              Submit your Enquiry →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const initFocusState = reactive({
  firstName: false,
  lastName: false,
  phone: false,
  email: false,
  inquiry: false,
});

const formData = reactive({
  title: "Mr.",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  inquiry: "",
});

const validatefirstName = computed(() =>
  !formData.firstName ? "Please enter first name" : ""
);
const validatelastName = computed(() =>
  !formData.firstName ? "Please enter first name" : ""
);
const validateNumber = computed(() =>
  !formData.firstName ? "Please enter first name" : ""
);
const validateEmail = computed(() =>
  !formData.firstName ? "Please enter first name" : ""
);
const validateInquiry = computed(() =>
  !formData.firstName ? "Please enter first name" : ""
);

const onFocus = (type) => {
  initFocusState[type] = true;
};

const submitForm = (e) => {
  e.preventDefault();

  Email.send({
    SecureToken: "5ef8b875-e00d-4887-ab0d-fd2b7a8fe767",
    To: "cuccu771@gmail.com",
    From: "trantuansong22@gmail.com",
    Subject: "[Cyprus Residency] - New client",
    Body: `
    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Inquiry</th>
        </tr>
        <tr>
            <td>${formData.title}</td>
            <td>${formData.firstName}</td>
            <td>${formData.lastName}</td>
            <td>${formData.phone}</td>
            <td>${formData.email}</td>
            <td>${formData.inquiry}</td>
        </tr>
    </table>
    `,
  }).then((message) => alert(message));
};
</script>