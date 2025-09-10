<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\HydroponicPlant
 *
 * @property int $id
 * @property string $plant_type
 * @property string|null $variety
 * @property string $location
 * @property \Illuminate\Support\Carbon $planting_date
 * @property \Illuminate\Support\Carbon $expected_harvest_date
 * @property \Illuminate\Support\Carbon|null $actual_harvest_date
 * @property float|null $harvest_weight_kg
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\HydroponicParameter> $parameters
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\HydroponicMaintenance> $maintenanceRecords
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant query()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant wherePlantType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereVariety($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant wherePlantingDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereExpectedHarvestDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereActualHarvestDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereHarvestWeightKg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicPlant whereUpdatedAt($value)
 * @method static \Database\Factories\HydroponicPlantFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class HydroponicPlant extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'plant_type',
        'variety',
        'location',
        'planting_date',
        'expected_harvest_date',
        'actual_harvest_date',
        'harvest_weight_kg',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'planting_date' => 'date',
        'expected_harvest_date' => 'date',
        'actual_harvest_date' => 'date',
        'harvest_weight_kg' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the hydroponic parameters for the plant.
     */
    public function parameters(): HasMany
    {
        return $this->hasMany(HydroponicParameter::class);
    }

    /**
     * Get the maintenance records for the plant.
     */
    public function maintenanceRecords(): HasMany
    {
        return $this->hasMany(HydroponicMaintenance::class);
    }
}