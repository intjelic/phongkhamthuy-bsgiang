<template>
  <div class="question">
    <page-header
      :title="$t('navigationBar.questions')"
      :description="$t('pageHeaders.descriptions.questions')"
    />
    <div class="container">
      <br>
      <page-introduction class="my-4 w-75 mx-auto" :text="$t('questionsPage.introduction')"/>
      <br>
      <br>
      <div class="text-danger h5 text-center">
        Sorry! This page is still under development and this page isn't completed yet. Please come back later.
      </div>
      <br>
      <br>
      <div>
          <h4>1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?</h4>
          <div><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Donec eu libero sit amet quam egestas semper.<em>Aenean ultricies mi vitae
            est.</em> Mauris placerat eleifend leo.
          </div>
          <br>
          <h4>2. Ut auctor quam lorem, vitae tincidunt eros ornare eleifend ?</h4>
          <div>Fusce consectetur arcu nec tempus hendrerit. Aliquam erat volutpat. Nulla efficitur,
            nisl et aliquam aliquam, lacus ipsum tincidunt eros, id porttitor ex arcu eu massa.
            Pellentesque accumsan risus lacus, quis laoreet dui lobortis quis. Suspendisse facilisis
            eu arcu sed hendrerit.
          </div>
          <br>
          <h4>3. Phasellus sit amet neque quis massa iaculis ?</h4>
          <div>Mauris mi massa, feugiat id eros pharetra, volutpat maximus sapien. Maecenas a
            pellentesque mi, eu consequat enim.
          </div>
          <br>
          <h4>4. Curabitur blandit orci ac dui posuere ?</h4>
          <div>Nulla facilisi. Mauris non iaculis orci. Donec non lorem et quam tristique convallis
            vel sit amet tellus. Vestibulum mollis elit sit amet pharetra cursus. Suspendisse ut
            orci quis augue accumsan pharetra.
          </div>
          <br>
          <h4>5. Lorem ipsum dolor sit amet, consectetuer adipiscing elit ?</h4>
          <div><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Donec eu libero sit amet quam egestas semper.<em>Aenean ultricies mi vitae
            est.</em> Mauris placerat eleifend leo.
          </div>
          <br>
          <h4>6. Ut auctor quam lorem, vitae tincidunt eros ornare eleifend ?</h4>
          <div>Fusce consectetur arcu nec tempus hendrerit. Aliquam erat volutpat. Nulla efficitur,
            nisl et aliquam aliquam, lacus ipsum tincidunt eros, id porttitor ex arcu eu massa.
            Pellentesque accumsan risus lacus, quis laoreet dui lobortis quis. Suspendisse facilisis
            eu arcu sed hendrerit.
          </div>
          <br>
          <h4>7. Phasellus sit amet neque quis massa iaculis ?</h4>
          <div>Mauris mi massa, feugiat id eros pharetra, volutpat maximus sapien. Maecenas a
            pellentesque mi, eu consequat enim.
          </div>
          <br>
      </div>
      <br>
      <br>
      <br>
    </div>
    <emergency-notice />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageIntroduction from '@/components/PageIntroduction.vue'
import EmergencyNotice from '@/components/EmergencyNotice.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'Questions',
  components: {
    PageHeader,
    PageIntroduction,
    EmergencyNotice,
    PageFooter
  }
}
</script>
