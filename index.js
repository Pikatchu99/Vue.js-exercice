var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        students: [],
        student: ['', '', ''],

    },
    methods: {
        addStudents() {
            this.student = ["<label>" + (this.students.length + 1) + "</label> ",
                "<label>" + this.name + "</label> ",
                "<label>" + this.course + "</label>",
                "<label>" + this.acceptancePeriod + "</label>",
            ];
            this.students.push(this.student);
            this.name = '';
            this.course = '';
            this.acceptancePeriod = '';
        },

    }
})