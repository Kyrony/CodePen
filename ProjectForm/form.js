app.component('project-form', {
    template:
    /*html*/
    `<form class="project-form" @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="project-name">Project Name</label>
            <input type="text" class="form-control" id="project-name" placeholder="Enter project name" v-model="project.name">
        </div>
        <div class="form-group">
            <label for="project-description">Project Description</label>
            <textarea class="form-control" id="project-description" rows="3" v-model="project.description"></textarea>
        </div>
        <div class="form-group">
            <label for="project-start-date">Project Start Date</label>
            <input type="date" class="form-control" id="project-start-date" v-model="project.startDate">
        </div>
        <div class="form-group">
            <label for="project-end-date">Project End Date</label>
            <input type="date" class="form-control" id="project-end-date" v-model="project.endDate">
        </div>
        <div class="form-group">
            <label for="project-status">Project Status</label>
            <select class="form-control" id="project-status" v-model="project.status">
                <option>In Progress</option>
                <option>Completed</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary" @click="submit()">Submit</button>
    </form>`,
    bindings: {
        project: '<'
    },
    data() {
        return {
            project: {
                name: '',
                description: '',
                startDate: '',
                endDate: '',
                status: ''
            },
            errors: []
        }
    },
    methods: {
        controller: function () {
            this.submit = function () {
                console.log('submitting project', this.project);
            }
        },
        onSubmit: function () {
            let project = {
                name: this.project.name,
                description: this.project.description,
                startDate: this.project.startDate,
                endDate: this.project.endDate,
                status: this.project.status
            }
            this.$emit('submit', project);
            this.name='';
            this.description='';
            this.startDate='';
            this.endDate='';
            this.status='';
        }  
    },
});