<div class="row">
  <div class="col-md-12">
      <h3>My Leaves</h3>
      <hr>
  </div>
</div>

  <div class="row" id="DateTime">
    <div class="col-md-12">
      <div class="form-container">

        <form id="timesheet_VL" class ="form-timesheet" method="post">
          <input type="hidden" name="userid" value="<?=$this->user->info('id');?>">
          <input type="hidden" name="vacation" value="4">
          <button type="submit" id="vacation-leave" class="btn custom-button leave-button" name="vacation">
            <span class="button-text">Vacation Leave</span>
          </button>
        </form>

        <form id="timesheet_SL" class ="form-timesheet" method="post">
          <input type="hidden" name="userid" value="<?=$this->user->info('id');?>">
          <input type="hidden" name="sick" value="3">
          <button type="submit" id="sick-leave" class="btn custom-button leave-button" name="sick">
            <span class="button-text">Sick Leave</span>
          </button>
        </form>

      </div>
    </div>
  </div>


<div class="table-responsive" id="leave-data">
</div>
<?php 
$this->load->view('attendance/partials/attendance_modal'); ?>