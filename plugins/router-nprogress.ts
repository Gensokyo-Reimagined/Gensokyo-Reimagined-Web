import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


NProgress.configure({
    easing: 'ease-in-out',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.4,
});

export default defineNuxtPlugin(() : void => {

    useRouter().beforeEach((): void => {
        NProgress.start();
    });

    useRouter().afterEach(() : void => {
        NProgress.done();
    });
})
