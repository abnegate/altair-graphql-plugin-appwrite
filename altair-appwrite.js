class AppwriteAltair {
    initialize(ctx) {
        this.addTheme(ctx);
        this.addPanel(ctx);
    }

    addTheme(ctx) {
        ctx.theme.add('appwriteDark', {
            isSystem: false,
            colors: {
                primary: '#f02e65',
                secondary: '#00A7C3',
                tertiary: '#616B7C',

                bg: '',
                offBg: '',
                font: '',
                offFont: '',
                border: '',
                offBorder: '',

                headerBg: '',
            },
            shadow: {
                color: '',
                opacity: 0.1
            },
            editor: {
                fontFamily: {
                    default: "JetBrains Mono"
                },
                fontSize: '',
                colors: {
                    comment: '',
                    string: '',
                    number: '',
                    variable: '',
                    keyword: '',
                    atom: '',
                    attribute: '',
                    property: '',
                    punctuation: '',
                    definition: '',
                    builtin: '',
                    cursor: '',
                }
            }
        })
    }

    addPanel(ctx) {
        const panel = document.createElement('div');

        panel.innerHTML = `
            <p>Appwrite is an open-source backend server for web, mobile, and Flutter developers that is packaged as a set of Docker containers for easy deployment and scaling.</p>
            <p>Visit <a href="https://appwrite.io" target="_blank">https://appwrite.io</a> to learn more.</p>
            
            <h3>Endpoint</h3>
            <input type="text" id="endpoint" value="http://localhost/v1" />
            <br>
            
            <h3>Project ID</h3>
            <input type="text" id="project" value='' />
        `;

        ctx.app.addPanel(panel, {
            title: 'Appwrite',
            location: 'sidebar'
        })
    }
}

window.AltairGraphQL.plugins.AppwriteAltair = AppwriteAltair